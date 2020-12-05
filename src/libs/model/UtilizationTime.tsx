export interface UtilizationTime {
  id: number
  started_at: Date
  finished_at: Date
  user_id: number
  seat_id: number
  created_at: Date
  updated_at: Date
}

export type UtilizationTimeInput = {
  user_id: number
  seat_id: number
  is_use: boolean
}

export type UtilizationHistory = {
  shop_id: number
}

export type initialUtilizationHistoryState = {
  utilization_id: number
  seat_id: number
  number: number
  seat_type: string
  started_at: string
  finished_at: string
}[]
