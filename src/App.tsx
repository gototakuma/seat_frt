import React from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'
import axios from 'axios'

// templete
import {
  LoginTemplate,
  ShopTemplate,
  UserTemplate,
} from './components/templates'

// router
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom'
import {
  UserInfoPage,
  UserNewPage,
  UserLoginPage,
  UserEditPage,
  ShopLoginPage,
  ShopNewPage,
  ShopEditPage,
  SeatIndexPage,
} from './components/pages'

const Login = () => {
  return (
    <LoginTemplate>
      <Route path="/user_login" component={UserLoginPage} />
      <Route path="/shop_login" component={ShopLoginPage} />
    </LoginTemplate>
  )
}

const User = () => {
  return (
    <UserTemplate>
      <Route path="/users" component={UserInfoPage} />
      <Route path="/user_new" component={UserNewPage} />
      <Route path="/user_edit" component={UserEditPage} />
    </UserTemplate>
  )
}

const Shop = () => {
  return (
    <ShopTemplate>
      <Route path="/shop_new" component={ShopNewPage} />
      <Route path="/shop_edit" component={ShopEditPage} />
      <Route path="/seat_index" component={SeatIndexPage} />
    </ShopTemplate>
  )
}

const App = () => {
  const [cookie] = useCookies(['token', 'position', 'fl_msg'])
  axios.defaults.baseURL = 'http://localhost:3001'
  axios.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: `Token ${cookie.token}`,
  }

  return (
    <CookiesProvider>
      <Router>
        {cookie.position === 'user' ? (
          <User />
        ) : cookie.position === 'shop' ? (
          <Shop />
        ) : (
          <Login />
        )}
      </Router>
    </CookiesProvider>
  )
}

export default App
