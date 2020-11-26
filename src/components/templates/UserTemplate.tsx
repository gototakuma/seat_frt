import React from 'react'
import { UserHeader } from '../organisms/headers/UserHeader'
import { UserSidebar } from '../organisms/sidebars/UserSidebar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
)

export const UserTemplate: React.FC = (props) => {
  const { children } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <UserHeader />
      <UserSidebar />
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  )
}
