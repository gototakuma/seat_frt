import React from 'react'
import { LoginHeader } from '../organisms/headers/LoginHeader'
import CssBaseline from '@material-ui/core/CssBaseline'
import { FlashMessage } from './FlashMessage'

export const LoginTemplate: React.FC = (props) => {
  const { children } = props

  return (
    <>
      <LoginHeader />
      <CssBaseline />
      <FlashMessage />
      {children}
    </>
  )
}
