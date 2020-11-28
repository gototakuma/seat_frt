import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
  ErrorMessage,
  PageContainer,
  TextForm,
  SubmitButton,
} from '../../atoms'
import { useEffectCustom } from '../../../hooks/useEffectCustom'
import { useShopInfo, useShopEdit } from '../../../hooks/useShop'
import { ShopInput } from '../../../libs/model/Shop'

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
  address: '',
}

export const ShopEditPage: React.FC = () => {
  const classes = useStyles()
  const { shopsData, setShopInfo } = useShopInfo()
  const { shopEditEM, setShopEdit } = useShopEdit()
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: defaultValues,
  })

  const onSubmit = (data: ShopInput) => {
    data['id'] = shopsData[0].id
    setShopEdit(data)
  }

  useEffectCustom(() => {
    setValue('name', shopsData[0].name)
    setValue('login_id', shopsData[0].login_id)
    setValue('address', shopsData[0].address)
  }, [shopsData])

  useEffect(() => {
    setShopInfo({ jwt: true })
  }, [])

  return (
    <div className={classes.container}>
      <PageContainer>
        <h2>店舗編集</h2>
        {shopEditEM?.map((err) => (
          <ErrorMessage key={err}>{err}</ErrorMessage>
        ))}
        <Controller
          as={TextForm}
          name="name"
          label="店舗名"
          control={control}
        />
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
        <Controller
          as={TextForm}
          name="address"
          label="住所"
          control={control}
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
