import axios from 'axios'
import {
  UtilizationTimeInput,
  UtilizationHistory,
} from '../model/UtilizationTime'

export const UtilizationTimeNew = (data: UtilizationTimeInput) => {
  return axios.post('./utilization_time_new', data)
}

export const UtilizationsHistory = (data: UtilizationHistory) => {
  return axios.post('./utilization_history', data)
}
