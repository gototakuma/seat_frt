import React from 'react'
import { Seat } from '../../../../libs/model'
import { UtilizationTimeInput } from '../../../../libs/model/UtilizationTime'

import { ErrorMessage, PageContainer, SubmitButton } from '../../../atoms'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    margin: '10px',
  },
}))

type Props = {
  seats: never[]
  utilizationNewEM: never[]
  setUtilizationNew: (data: UtilizationTimeInput) => Promise<void>
}

export const SeatList: React.FC<Props> = (props) => {
  const { seats, utilizationNewEM, setUtilizationNew } = props
  const classes = useStyles()
  let data: UtilizationTimeInput = {
    user_id: 0,
    seat_id: 0,
    is_use: false,
  }

  const handleChange = (seat: Seat) => {
    const user_id = window.prompt('お客様IDを入力してください。')
    if (user_id) {
      data['user_id'] = Number(user_id)
      data['seat_id'] = seat.id
      data['is_use'] = seat.is_use
      setUtilizationNew(data)
    }
  }

  return (
    <>
      <PageContainer>
        <h2>座席一覧</h2>
        <ErrorMessage>{utilizationNewEM}</ErrorMessage>
        {seats.map((seat: Seat) => (
          <SubmitButton
            color={seat.is_use ? 'secondary' : 'primary'}
            variant="outlined"
            className={classes.container}
            onClick={() => handleChange(seat)}
            key={seat.id}
          >
            {seat.number}
          </SubmitButton>
        ))}
      </PageContainer>
    </>
  )
}
