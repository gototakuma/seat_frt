import React, { useEffect } from 'react'
import { MessageNewForm, MessageNotSent, MessageSent } from './'
import {
  useMessageNew,
  useMessageInfo,
  useMessageEdit,
} from '../../../../hooks/useMessage'
import { useEffectCustom } from '../../../../hooks/useEffectCustom'

export const MessageShopPage: React.FC = () => {
  const { messageNewEM, setMessageNew } = useMessageNew()
  const { messagesData, setMessageInfo } = useMessageInfo()
  const { messageEditEM, setMessageEdit } = useMessageEdit()

  useEffect(() => {
    setMessageInfo({})
  }, [])

  useEffectCustom(() => {
    setMessageInfo({})
  }, [messageEditEM])

  return (
    <>
      <MessageNewForm
        messageNewEM={messageNewEM}
        setMessageNew={setMessageNew}
      />
      <MessageNotSent
        messages={messagesData.not_sent}
        setMessageEdit={setMessageEdit}
      />
      <MessageSent messages={messagesData.sent} />
    </>
  )
}
