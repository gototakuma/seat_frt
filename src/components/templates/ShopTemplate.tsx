import React from 'react'
import { CommonHeader } from '../organisms/headers/CommonHeader'
import { ShopSidebar } from '../organisms/sidebars/ShopSidebar'
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

export const ShopTemplate: React.FC = (props) => {
  const { children } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <CommonHeader />
      <ShopSidebar />
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  )
}
