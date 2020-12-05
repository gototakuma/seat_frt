import { useState } from 'react'
import { useCookies } from 'react-cookie'

import {
  UtilizationTimeNew,
  UtilizationsHistory,
} from '../libs/api/utilizationTime'
import {
  UtilizationTimeInput,
  UtilizationHistory,
  initialUtilizationHistoryState,
} from '../libs/model/UtilizationTime'

export const useUtilizationNew = () => {
  const [utilizationNewEM, setUtilizationNewEM] = useState([])
  const [cookie, setCookie] = useCookies(['fl_msg'])

  const setUtilizationNew = async (data: UtilizationTimeInput) => {
    const res = await UtilizationTimeNew(data)

    if (res.data.fl_msg) {
      setUtilizationNewEM([])
      setCookie('fl_msg', res.data.fl_msg, {})
    } else {
      setUtilizationNewEM(res.data.err_msg)
    }
  }
  return { utilizationNewEM, setUtilizationNew }
}

export const useUtilizationHistory = () => {
  const [utilizationHistoryEM, setUtilizationHistoryEM] = useState('')
  const [
    utilizationHistoryData,
    setUtilizationHistoryData,
  ] = useState<initialUtilizationHistoryState>([])

  const setUtilizationHistory = async (data: UtilizationHistory) => {
    const res = await UtilizationsHistory(data)

    if (res.data.utilizations_history) {
      setUtilizationHistoryEM('')
      setUtilizationHistoryData(res.data.utilizations_history)
    } else {
      setUtilizationHistoryEM(res.data.err_msg)
    }
  }
  return { utilizationHistoryEM, utilizationHistoryData, setUtilizationHistory }
}
