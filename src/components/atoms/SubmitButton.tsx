import React from 'react'
import Button from '@material-ui/core/Button'

type Props = {
  children: React.ReactNode
  color: 'primary' | 'secondary'
  variant: 'contained' | 'outlined' | 'text'
  onClick: () => Promise<void>
}

export const SubmitButton: React.FC<Props> = (props) => {
  const { children, color, variant, onClick } = props
  return (
    <Button variant={variant} color={color} onClick={onClick}>
      {children}
    </Button>
  )
}
