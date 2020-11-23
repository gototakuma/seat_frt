import React from 'react'
import { UserHeader } from '../organisms/UserHeader'
import CssBaseline from '@material-ui/core/CssBaseline'

export const UserTemplate: React.FC = (props) => {
  const { children } = props

  return (
    <>
      <UserHeader />
      <CssBaseline />
      {children}
    </>
  )
}
