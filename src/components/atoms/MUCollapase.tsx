import React from 'react'

import Collapse from '@material-ui/core/Collapse'

type Props = {
  collOpen: boolean
}

export const MUCollapase: React.FC<Props> = (props) => {
  const { children, collOpen } = props

  return <Collapse in={collOpen}>{children}</Collapse>
}
