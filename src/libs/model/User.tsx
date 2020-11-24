export interface User {
  id: number
  name: string
  login_id: string
  password: string
  created_at: Date
  updated_at: Date
}

export type UserInput = Omit<User, 'created_at' | 'upadted_at'>
