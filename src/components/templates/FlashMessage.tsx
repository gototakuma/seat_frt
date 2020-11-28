import React, { useState } from 'react'
import { useEffectCustom } from '../../hooks/useEffectCustom'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { useCookies } from 'react-cookie'
import Alert from '@material-ui/lab/Alert'
import Collapse from '@material-ui/core/Collapse'

type Props = {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alert: {
      zIndex: 100,
      marginBottom: '2rem',
      borderRadius: '10px',
      boxShadow: '0 5px 5px 0 rgba(0, 0, 0, .2)',
      fontWeight: 'bold',
    },
  }),
)

export const FlashMessage: React.FC<Props> = () => {
  const classes = useStyles()
  const [isMsg, setIsMsg] = useState(false)
  const [cookie] = useCookies(['fl_msg'])

  useEffectCustom(() => {
    if (cookie.fl_msg) {
      setIsMsg(true)
    }
  }, [cookie.fl_msg])

  useEffectCustom(() => {
    if (isMsg) {
      setTimeout(() => {
        setIsMsg(false)
      }, 5000)
    }
  }, [isMsg])

  return (
    <Collapse in={isMsg}>
      <Alert severity="success" className={classes.alert}>
        {cookie.fl_msg}
      </Alert>
    </Collapse>
  )
}
