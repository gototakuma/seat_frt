import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { SubmitButton } from '../../atoms'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

export const LoginHeader: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const [loginData, setLoginData] = useState({
    shop: false,
    title: '店舗ログイン',
  })

  const changeLogin = () => {
    if (loginData.shop) {
      setLoginData({
        ...loginData,
        shop: false,
        title: '店舗ログイン',
      })
      history.push('./user_login')
    } else {
      setLoginData({
        ...loginData,
        shop: true,
        title: 'ログイン',
      })
      history.push('./shop_login')
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            SeatApp
          </Typography>
          <SubmitButton color="inherit" onClick={changeLogin}>
            {loginData.title}
          </SubmitButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
