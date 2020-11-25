import axios from 'axios'

export const LoginApi = (data: any) => {
  return axios.post('./user_login', data)
}
