export interface Seat {
  id: number
  number: number
  seat_type: string
  shop_id: number
  created_at: Date
  updated_at: Date

  delete_flg: boolean
}

export type SeatInput = Omit<Seat, 'created_at' | 'updated_at'>

export type SeatSearch = {
  id?: number
  number?: number
  seat_type?: string
}
