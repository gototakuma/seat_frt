import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

type Props = {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '100%',
      padding: '10px 24px',
      borderRadius: '10px',
    },
  }),
)

export const PageContainer: React.FC<Props> = (props) => {
  const { children } = props
  const classes = useStyles()

  return (
    <Box boxShadow={3} className={classes.root}>
      {children}
    </Box>
  )
}
