import React, { useState, useEffect } from 'react'

import { useSeatInfo } from '../../../hooks/useSeat'
import { SeatInfo, SeatShow } from './'

export const SeatIndexPage: React.FC = () => {
  const [choice, setChoice] = useState({})
  const { seatInfoEM, seatsData, setSeatInfo } = useSeatInfo()

  useEffect(() => {
    setSeatInfo({})
  }, [])

  return (
    <>
      <SeatInfo
        seatInfoEM={seatInfoEM}
        seatsData={seatsData}
        setChoice={setChoice}
        setSeatInfo={setSeatInfo}
      />
      <SeatShow choice={choice} />
    </>
  )
}
