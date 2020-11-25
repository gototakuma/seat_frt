import React from 'react'
import { UserHeader } from '../organisms/headers/UserHeader'
import { UserSidebar } from '../organisms/sidebars/UserSidebar'
import CssBaseline from '@material-ui/core/CssBaseline'

export const UserTemplate: React.FC = (props) => {
  const { children } = props

  return (
    <>
      <UserHeader />
      <CssBaseline />
      <UserSidebar />
      {children}
    </>
  )
}
