import React from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'

type Props = ButtonProps

export const SubmitButton: React.FC<Props> = (props) => {
  const { ...reset } = props
  return <Button {...reset}></Button>
}
