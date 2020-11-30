import React from 'react'

import { PageContainer } from '../../atoms'

type Props = {
  choice: {
    id?: number
    number?: number
    seat_type?: string
    shop_id?: number
  }
}

export const SeatShow: React.FC<Props> = (props) => {
  const { choice } = props
  return (
    <PageContainer>
      <h2>座席詳細</h2>
      {choice.id}
    </PageContainer>
  )
}
