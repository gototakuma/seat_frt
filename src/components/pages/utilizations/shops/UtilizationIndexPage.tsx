import React, { useEffect } from 'react'

import { useSeatInfo } from '../../../../hooks/useSeat'
import { useUtilizationNew } from '../../../../hooks/useUtilizationTime'
import { useEffectCustom } from '../../../../hooks/useEffectCustom'
import { SeatList, InUseList } from '.'

export const UtilizationIndexPage: React.FC = () => {
  const { seatsData, setSeatInfo } = useSeatInfo()
  const { utilizationNewEM, setUtilizationNew } = useUtilizationNew()

  useEffect(() => {
    setSeatInfo({ in_use: true })
  }, [])

  useEffectCustom(() => {
    if (utilizationNewEM.length < 1) {
      setSeatInfo({ in_use: true })
    }
  }, [utilizationNewEM])

  return (
    <>
      <SeatList
        seats={seatsData.seats}
        utilizationNewEM={utilizationNewEM}
        setUtilizationNew={setUtilizationNew}
      />
      <InUseList utilizationSeats={seatsData.utilization_seats} />
    </>
  )
}
