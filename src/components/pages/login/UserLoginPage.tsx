import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { useCookies } from 'react-cookie'

import { ErrorMessage, TextForm, SubmitButton } from '../../atoms/'
import { LoginInput } from '../../../libs/model/User'
import { useLogin } from '../../../hooks/useLogin'
import { useEffectCustom } from '../../../hooks/useEffectCustom'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  link: {
    color: '#87CEFA',
    cursor: 'pointer',
  },
})

const defaultValues = {
  login_id: '',
  password: '',
}

export const UserLoginPage: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const [cookie] = useCookies(['position'])
  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  })
  const { loginEM, setLogin } = useLogin()

  const onSubmit = (data: LoginInput) => {
    setLogin(data)
  }

  useEffectCustom(() => {
    if (cookie.position === 'user') {
      window.location.href = './utilization_rate'
    }
  }, [cookie])

  return (
    <div className={classes.container}>
      <h2>ログイン</h2>
      {loginEM?.map((err) => (
        <ErrorMessage key={err}>{err}</ErrorMessage>
      ))}
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
        ログイン
      </SubmitButton>
      <p className={classes.link} onClick={() => history.push('/user_new')}>
        アカウント登録
      </p>
    </div>
  )
}
