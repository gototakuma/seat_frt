import { useState } from 'react'
import { useCookies } from 'react-cookie'

import { LoginApi } from '../libs/api/login'
import { LoginInput } from '../libs/model/User'

export const useLogin = () => {
  const [loginEM, setLoginEM] = useState([])
  const [cookie, setCookie] = useCookies(['token', 'position', 'fl_msg'])

  const setLogin = async (data: LoginInput) => {
    const res = await LoginApi(data)
    if (res.data.fl_msg) {
      setLoginEM([])
      setCookie('fl_msg', res.data.fl_msg, {})
      setCookie('token', res.data.token, {})
      setCookie('position', res.data.position, {})
    } else {
      setLoginEM(res.data.err_msg)
    }
  }
  return { loginEM, setLogin }
}
