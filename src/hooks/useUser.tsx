import { useState } from 'react'
import { useCookies } from 'react-cookie'

import { UserNew, UserInfo, UserEdit } from '../libs/api/user'
import { UserInput, UserSearch, initialUserState } from '../libs/model/User'

export const useUserInfo = () => {
  const [usersData, setUsersData] = useState(initialUserState)
  const [userInfoEM, setUserInfoEM] = useState([])

  const setUserInfo = async (data: UserSearch) => {
    const res = await UserInfo(data)
    if (res.data.users) {
      setUserInfoEM([])
      setUsersData(res.data.users)
    } else {
      setUserInfo(res.data.err_msg)
    }
  }
  return { usersData, userInfoEM, setUserInfo }
}

export const useUserNew = () => {
  const [userNewEM, setUserNewEM] = useState([])
  const [cookie, setCookie] = useCookies(['fl_msg'])

  const setUserNew = async (data: UserInput) => {
    const res = await UserNew(data)
    if (res.data.fl_msg) {
      setUserNewEM([])
      setCookie('fl_msg', res.data.fl_msg, {})
    } else {
      setUserNewEM(res.data.err_msg)
    }
  }
  return { userNewEM, setUserNew }
}

export const useUserEdit = () => {
  const [userEditEM, setUserEM] = useState([])
  const [cookie, setCookie] = useCookies(['fl_msg'])

  const setUserEdit = async (data: UserInput) => {
    const res = await UserEdit(data)
    if (res.data.fl_msg) {
      setUserEM([])
      setCookie('fl_msg', res.data.fl_msg, {})
    } else {
      setUserEM(res.data.err_msg)
    }
  }
  return { userEditEM, setUserEdit }
}
