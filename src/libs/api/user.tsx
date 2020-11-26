import axios from 'axios'
import { UserInput, UserSearch } from '../model/User'

export const UserInfo = (data: UserSearch) => {
  return axios.post('./user_info', data)
}

export const UserNew = (data: UserInput) => {
  return axios.post('./user_new', data)
}

export const UserEdit = (data: UserInput) => {
  return axios.post('./user_edit', data)
}
