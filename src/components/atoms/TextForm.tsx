import React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

type Props = TextFieldProps

const useStyles = makeStyles({
  root: {
    display: 'block',
    margin: '2rem auto',
  },
  form: {
    maxWidth: 800,
    minWidth: 200,
  },
})

export const TextForm: React.FC<Props> = (props) => {
  const classes = useStyles()
  const { ...reset } = props
  return (
    <div className={classes.root}>
      <TextField {...reset} className={classes.form} />
    </div>
  )
}
