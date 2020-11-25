import React from 'react'
import { useCookies } from 'react-cookie'

import { SubmitButton } from '../../atoms'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  font: {
    fontWeight: 'bold',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}))

export const UserHeader: React.FC = () => {
  const classes = useStyles()
  const [cookie, setCookie, removeCookie] = useCookies([
    'token',
    'position',
    'fl_msg',
  ])

  const cookieReset = () => {
    removeCookie('token')
    removeCookie('position')
    setCookie('fl_msg', 'ログアウトしました。', {})
    window.location.href = './user_login'
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            SeatApp
          </Typography>
          <SubmitButton color="inherit" onClick={cookieReset}>
            ログアウト
          </SubmitButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
