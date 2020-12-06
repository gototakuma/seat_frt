import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { MessageInfo, MessageNew, MessageEdit } from '../libs/api/message'
import { Message, MessageInput, MessageUserFlg } from '../libs/model/Message'

export const useMessageInfo = () => {
  const [messageInfoEM, setMessageInfoEM] = useState('')
  const [messagesData, setMessagesData] = useState({
    messages: [],
    sent: [],
    not_sent: [],
  })

  const setMessageInfo = async (data: MessageUserFlg) => {
    const res = await MessageInfo(data)

    if (res.data.messages) {
      setMessageInfoEM('')
      setMessagesData({
        ...messagesData,
        messages: res.data.messages,
        sent: res.data.sent,
        not_sent: res.data.not_sent,
      })
    } else {
      setMessageInfoEM(res.data.err_msg)
    }
  }
  return { messageInfoEM, messagesData, setMessageInfo }
}

export const useMessageNew = () => {
  const [messageNewEM, setMessageNewEM] = useState([])
  const [cookie, setCookie] = useCookies(['fl_msg'])

  const setMessageNew = async (data: MessageInput) => {
    const res = await MessageNew(data)

    if (res.data.fl_msg) {
      setMessageNewEM([])
      setCookie('fl_msg', res.data.fl_msg, {})
    } else {
      setMessageNewEM(res.data.err_msg)
    }
  }
  return { messageNewEM, setMessageNew }
}

export const useMessageEdit = () => {
  const [messageEditEM, setMessageEditEM] = useState('')
  const [cookie, setCookie] = useCookies(['fl_msg'])

  const setMessageEdit = async (data: Message) => {
    const res = await MessageEdit(data)

    if (res.data.fl_msg) {
      setMessageEditEM('')
      setCookie('fl_msg', res.data.fl_msg)
    } else {
      setMessageEditEM(res.data.err_msg)
    }
  }
  return { messageEditEM, setMessageEdit }
}
