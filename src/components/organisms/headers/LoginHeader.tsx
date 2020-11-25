import React from 'react'

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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            SeatApp
          </Typography>
          <SubmitButton color="inherit">ログイン</SubmitButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
