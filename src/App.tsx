import React from 'react'
import axios from 'axios'

// templete
import { UserTemplate } from './components/templates/UserTemplate'

// router
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom'
import { UserInfoPage } from './components/pages/users/UserInfoPage'
import { UserNewPage } from './components/pages/users/UserNewPage'

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
  return (
    <Router>
      <User />
    </Router>
  )
}

export default App
