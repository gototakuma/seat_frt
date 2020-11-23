import React from 'react'

// templete
import { UserTemplate } from './components/templates/UserTemplate'

// router
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom'
import { UserInfoPage } from './components/pages/users/UserInfoPage'

const User = () => {
  return (
    <UserTemplate>
      <Route path="/users" component={UserInfoPage} />
    </UserTemplate>
  )
}

const App = () => {
  return (
    <Router>
      <User />
    </Router>
  )
}

export default App
