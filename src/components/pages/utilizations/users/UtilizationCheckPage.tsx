import React, { useEffect, useState } from 'react'

import { useEffectCustom } from '../../../../hooks/useEffectCustom'
import { useShopInfo } from '../../../../hooks/useShop'
import { useSeatInfo } from '../../../../hooks/useSeat'
import { useUtilizationHistory } from '../../../../hooks/useUtilizationTime'
import { UtilizationHistory, UtilizationRate } from './'

export const UtilizationCheckPage: React.FC = () => {
  const [shopId, setShopId] = useState(0)
  const { shopsData, setShopInfo } = useShopInfo()
  const { seatsData, setSeatInfo } = useSeatInfo()
  const {
    utilizationHistoryData,
    setUtilizationHistory,
  } = useUtilizationHistory()

  useEffectCustom(() => {
    setUtilizationHistory({ shop_id: shopId })
  }, [seatsData])

  useEffect(() => {
    setShopInfo({})
  }, [])

  return (
    <>
      <UtilizationRate
        shops={shopsData}
        rate={seatsData.rate}
        statistics_number={seatsData.statistics_number}
        setShopId={setShopId}
        setSeatInfo={setSeatInfo}
      />
      <UtilizationHistory utilizationsHistory={utilizationHistoryData} />
    </>
  )
}
