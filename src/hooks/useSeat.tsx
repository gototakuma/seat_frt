import { useState } from 'react'
import { useCookies } from 'react-cookie'

import { SeatEdit, SeatInfo, SeatNew } from '../libs/api/seat'
import { SeatInput, SeatSearch } from '../libs/model/Seat'

export const useSeatInfo = () => {
  const [seatsData, setSeatsData] = useState({
    seats: [],
    utilization_seats: [],
    rate: 0,
    statistics_number: '',
  })
  const [seatInfoEM, setSeatInfoEM] = useState([])

  const setSeatInfo = async (data: SeatSearch) => {
    const res = await SeatInfo(data)

    if (res.data.seats) {
      setSeatInfoEM([])
      if (res.data.utilization_seats) {
        if (res.data.rate) {
          setSeatsData({
            ...seatsData,
            seats: res.data.seats,
            utilization_seats: res.data.utilization_seats,
            rate: res.data.rate,
            statistics_number: res.data.statistics_number,
          })
        } else {
          setSeatsData({
            ...seatsData,
            seats: res.data.seats,
            utilization_seats: res.data.utilization_seats,
          })
        }
      } else {
        setSeatsData({ ...seatsData, seats: res.data.seats })
      }
    } else {
      setSeatInfoEM(res.data.err_msg)
    }
  }
  return { seatsData, seatInfoEM, setSeatInfo }
}

export const useSeatNew = () => {
  const [seatNewEM, setSeatNewEM] = useState([])
  const [cookie, setCookie] = useCookies(['fl_msg'])

  const setSeatNew = async (data: SeatInput) => {
    const res = await SeatNew(data)

    if (res.data.fl_msg) {
      setSeatNewEM([])
      setCookie('fl_msg', res.data.fl_msg, {})
    } else {
      setSeatNewEM(res.data.err_msg)
    }
  }
  return { seatNewEM, setSeatNew }
}

export const useSeatEdit = () => {
  const [seatEditEM, setSeatEditEM] = useState([])
  const [cookie, setCookie] = useCookies(['fl_msg'])

  const setSeatEdit = async (data: SeatInput) => {
    const res = await SeatEdit(data)

    if (res.data.fl_msg) {
      setSeatEditEM([])
      setCookie('fl_msg', res.data.fl_msg, {})
    } else {
      setSeatEditEM(res.data.err_msg)
    }
  }
  return { seatEditEM, setSeatEdit }
}
