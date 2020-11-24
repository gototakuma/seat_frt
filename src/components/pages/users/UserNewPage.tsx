import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import { ErrorMessage, TextForm, SubmitButton } from '../../atoms'
import { useUserNew } from '../../../hooks/useUser'
import { UserInput } from '../../../libs/model/User'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  },
})

const defaultValues = {
  name: '',
  login_id: '',
  password: '',
}

export const UserNewPage: React.FC = () => {
  const classes = useStyles()
  const { userNewEM, setUserNew } = useUserNew()
  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  })

  const onSubmit = (data: UserInput) => {
    setUserNew(data)
  }

  return (
    <div className={classes.container}>
      <h2>アカウント作成</h2>
      {userNewEM?.map((err) => (
        <ErrorMessage key={err}>{err}</ErrorMessage>
      ))}
      <Controller as={TextForm} name="name" label="名前" control={control} />
      <Controller
        as={TextForm}
        name="login_id"
        label="ログインID"
        control={control}
      />
      <Controller
        as={TextForm}
        name="password"
        label="パスワード"
        control={control}
        type="password"
      />
      <SubmitButton
        color="primary"
        variant="contained"
        onClick={handleSubmit(onSubmit)}
      >
        保存
      </SubmitButton>
    </div>
  )
}
