import axios from 'axios'
import { Message, MessageInput, MessageUserFlg } from '../model/Message'

export const MessageInfo = (data: MessageUserFlg) => {
  return axios.post('./message_info', data)
}

export const MessageNew = (data: MessageInput) => {
  return axios.post('./message_new', data)
}

export const MessageEdit = (data: Message) => {
  return axios.post('./message_edit', data)
}
