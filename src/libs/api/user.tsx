import axios from 'axios'
import { UserInput } from '../model/User'

export const UserNew = (data: UserInput) => {
  return axios.post('./user_new', data)
}
