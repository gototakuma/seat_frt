export interface Shop {
  id: number
  name: string
  login_id: string
  password: string
  address: string
  created_at: Date
  updated_at: Date

  shop_login: boolean
  jwt: boolean
  delete_flg: boolean
}

export type ShopInput = Omit<Shop, 'created_at' | 'updated_at'>
export type ShopLoginInput = Pick<Shop, 'login_id' | 'password' | 'shop_login'>

export type ShopSearch = {
  id?: number
  jwt?: boolean
  name?: string
  address?: string
}

export const initialShopState = [
  {
    id: 0,
    name: '',
    login_id: '',
    password: '',
    address: '',
    created_at: '',
    updated_at: '',
  },
]
