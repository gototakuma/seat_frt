export interface Shop {
  id: number
  name: string
  login_id: string
  password: string
  address: string
  shop_login: boolean
  created_at: Date
  updated_at: Date
}

export type ShopInput = Omit<Shop, 'created_at' | 'updated_at'>
export type ShopLoginInput = Pick<Shop, 'login_id' | 'password' | 'shop_login'>
