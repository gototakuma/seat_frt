export interface User {
  id: number
  name: string
  login_id: string
  password: string
  created_at: Date
  updated_at: Date
}

export type UserInput = Omit<User, 'created_at' | 'updated_at'>
export type LoginInput = Pick<User, 'login_id' | 'password'>

export type UserSearch = {
  id?: number
  jwt?: boolean
  name?: string
}

export const initialUserState = [
  {
    id: 0,
    name: '',
    login_id: '',
    password: '',
    created_at: '',
    updated_at: '',
  },
]
