export interface Message {
  id: number
  title: string
  description: string
  is_sent: boolean
  shop_name: string
  created_at: Date
  updated_at: Date

  delete_flg: boolean
}

export type MessageInput = Pick<Message, 'title' | 'description' | 'is_sent'>

export type MessageUserFlg = {
  user_flg?: boolean
}

export const initialMessageState = {
  title: '',
  description: '',
  is_sent: false,
}
