import { useState } from 'react'
import { useCookies } from 'react-cookie'

import { ShopInfo, ShopNew, ShopEdit } from '../libs/api/shop'
import { ShopInput, ShopSearch, initialShopState } from '../libs/model/Shop'

export const useShopInfo = () => {
  const [shopsData, setShopsData] = useState(initialShopState)
  const [shopInfoEM, setShopInfoEM] = useState([])

  const setShopInfo = async (data: ShopSearch) => {
    const res = await ShopInfo(data)
    if (res.data.shops) {
      setShopInfoEM([])
      setShopsData(res.data.shops)
    } else {
      setShopInfoEM(res.data.err_msg)
    }
  }
  return { shopsData, shopInfoEM, setShopInfo }
}

export const useShopNew = () => {
  const [shopNewEM, setShopNewEM] = useState([])
  const [cookie, setCookie] = useCookies(['fl_msg'])

  const setShopNew = async (data: ShopInput) => {
    const res = await ShopNew(data)
    if (res.data.fl_msg) {
      setShopNewEM([])
      setCookie('fl_msg', res.data.fl_msg, {})
    } else {
      setShopNewEM(res.data.err_msg)
    }
  }
  return { shopNewEM, setShopNew }
}

export const useShopEdit = () => {
  const [shopEditEM, setShopEditEM] = useState([])
  const [cookie, setCookie] = useCookies(['fl_msg'])

  const setShopEdit = async (data: ShopInput) => {
    const res = await ShopEdit(data)

    if (res.data.fl_msg) {
      setShopEditEM([])
      setCookie('fl_msg', res.data.fl_msg, {})
    } else {
      setShopEditEM(res.data.err_msg)
    }
  }
  return { shopEditEM, setShopEdit }
}
