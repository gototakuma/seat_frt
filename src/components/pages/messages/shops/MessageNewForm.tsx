import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
  ErrorMessage,
  PageContainer,
  TextForm,
  MultilineForm,
  SubmitButton,
} from '../../../atoms'
import { useEffectCustom } from '../../../../hooks/useEffectCustom'
import {
  MessageInput,
  initialMessageState,
} from '../../../../libs/model/Message'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    height: '40px',
    margin: 'auto 0',
  },
})

type Props = {
  messageNewEM: never[]
  setMessageNew: (data: MessageInput) => Promise<void>
}

export const MessageNewForm: React.FC<Props> = (props) => {
  const classes = useStyles()
  const { messageNewEM, setMessageNew } = props
  const { control, handleSubmit, reset } = useForm({
    defaultValues: initialMessageState,
  })

  const onSubmit = (data: MessageInput) => {
    setMessageNew(data)
  }

  useEffectCustom(() => {
    if (messageNewEM.length < 1) {
      reset(initialMessageState)
    }
  }, [messageNewEM])

  return (
    <PageContainer>
      <div className={classes.flex}>
        <h2>お知らせ登録</h2>
        <SubmitButton
          color="primary"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          className={classes.button}
        >
          登録
        </SubmitButton>
      </div>
      {messageNewEM.map((err: string) => (
        <ErrorMessage>{err}</ErrorMessage>
      ))}
      <div className={classes.flex}>
        <Controller
          as={TextForm}
          name="title"
          label="タイトル"
          control={control}
        />
        <Controller
          as={MultilineForm}
          name="description"
          label="本文"
          control={control}
          multiline
        />
      </div>
    </PageContainer>
  )
}
