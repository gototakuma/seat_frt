import { useState } from 'react'
import { UserNew } from '../libs/api/user'

export const useUserNew = () => {
  const [userNewEM, setUserNewEM] = useState([])

  const setUserNew = async (data: any) => {
    const res = await UserNew(data)
    if (res.data.fl_msg) {
      setUserNewEM([])
    } else {
      setUserNewEM(res.data.err_msg)
    }
  }
  return { userNewEM, setUserNew }
}
