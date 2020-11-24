import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

type Props = {}

const useStyle = makeStyles({
  fontEM: {
    color: '#FF7F50',
    fontWeight: 'bold',
  },
})

export const ErrorMessage: React.FC<Props> = (props) => {
  const { children } = props
  const classes = useStyle()

  return <p className={classes.fontEM}>{children}</p>
}
