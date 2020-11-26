import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
  ErrorMessage,
  PageContainer,
  TextForm,
  SubmitButton,
} from '../../atoms'
import { useEffectCustom } from '../../../hooks/useEffectCustom'
import { useUserInfo, useUserEdit } from '../../../hooks/useUser'
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

export const UserEditPage: React.FC = () => {
  const classes = useStyles()
  const { usersData, setUserInfo } = useUserInfo()
  const { userEditEM, setUserEdit } = useUserEdit()
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: defaultValues,
  })

  const onSubmit = (data: UserInput) => {
    data['id'] = usersData[0].id
    setUserEdit(data)
  }

  useEffectCustom(() => {
    setValue('name', usersData[0].name)
    setValue('login_id', usersData[0].login_id)
  }, [usersData])

  useEffect(() => {
    setUserInfo({ jwt: true })
  }, [])

  return (
    <div className={classes.container}>
      <PageContainer>
        <h2>アカウント編集</h2>
        {userEditEM?.map((err) => (
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
      </PageContainer>
    </div>
  )
}
