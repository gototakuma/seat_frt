import axios from 'axios'
import { ShopInput, ShopSearch } from '../model/Shop'

export const ShopInfo = (data: ShopSearch) => {
  return axios.post('./shop_info', data)
}

export const ShopNew = (data: ShopInput) => {
  return axios.post('./shop_new', data)
}

export const ShopEdit = (data: ShopInput) => {
  return axios.post('./shop_edit', data)
}
