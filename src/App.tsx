import React from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'
import axios from 'axios'

// templete
import { LoginTemplate, UserTemplate } from './components/templates'

// router
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom'
import { UserInfoPage, UserNewPage, UserLoginPage } from './components/pages'

const Login = () => {
  return (
    <LoginTemplate>
      <Route path="/user_login" component={UserLoginPage} />
    </LoginTemplate>
  )
}

const User = () => {
  return (
    <UserTemplate>
      <Route path="/users" component={UserInfoPage} />
      <Route path="/user_new" component={UserNewPage} />
    </UserTemplate>
  )
}

const App = () => {
  axios.defaults.baseURL = 'http://localhost:3001'
  axios.defaults.headers = {
    'Content-Type': 'application/json',
  }

  const [cookie] = useCookies(['token', 'position', 'fl_msg'])

  return (
    <CookiesProvider>
      <Router>
        {cookie.position === 'user' ? (
          <User />
        ) : cookie.position === 'shop' ? (
          <User />
        ) : (
          <Login />
        )}
      </Router>
    </CookiesProvider>
  )
}

export default App
