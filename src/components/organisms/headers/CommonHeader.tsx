import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
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

export const CommonHeader: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            SeatApp
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
