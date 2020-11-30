import axios from 'axios'

import { SeatSearch, SeatInput } from '../model/Seat'

export const SeatInfo = (data: SeatSearch) => {
  return axios.post('./seat_info', data)
}

export const SeatNew = (data: SeatInput) => {
  return axios.post('./seat_new', data)
}

export const SeatEdit = (data: SeatInput) => {
  return axios.post('./seat_edit', data)
}
