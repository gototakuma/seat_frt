import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'

import {
  ErrorMessage,
  PageContainer,
  TextForm,
  SubmitButton,
} from '../../atoms'
import { useShopNew } from '../../../hooks/useShop'
import { ShopInput } from '../../../libs/model/Shop'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  },
  link: {
    color: '#87CEFA',
    cursor: 'pointer',
  },
})

const defaultValues = {
  name: '',
  login_id: '',
  password: '',
  address: '',
}

export const ShopNewPage: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const { shopNewEM, setShopNew } = useShopNew()
  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  })

  const onSubmit = (data: ShopInput) => {
    setShopNew(data)
  }

  return (
    <div className={classes.container}>
      <PageContainer>
        <h2>店舗登録</h2>
        {shopNewEM?.map((err) => (
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
          登録
        </SubmitButton>
        <p
          className={classes.link}
          onClick={() => history.push('./shop_login')}
        >
          戻る
        </p>
      </PageContainer>
    </div>
  )
}
