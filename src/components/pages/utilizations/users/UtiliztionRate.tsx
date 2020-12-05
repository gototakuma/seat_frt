import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
  LineProgress,
  PageContainer,
  MUSelect,
  SubmitButton,
} from '../../../atoms'
import { SeatSearch } from '../../../../libs/model/Seat'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  size: {
    fontSize: '1rem',
  },
  margin: {
    margin: 'auto 0',
  },
})

type Props = {
  shops: {
    id: number
    name: string
    login_id: string
    password: string
    address: string
    created_at: string
    updated_at: string
  }[]
  rate: number
  statistics_number: string
  setShopId: React.Dispatch<React.SetStateAction<any>>
  setSeatInfo: (data: SeatSearch) => Promise<void>
}

export const UtilizationRate: React.FC<Props> = (props) => {
  const classes = useStyles()
  const { shops, rate, statistics_number, setShopId, setSeatInfo } = props
  const { control, handleSubmit } = useForm()

  const onSubmit = (data: SeatSearch) => {
    data['in_use'] = true
    data['rate_flg'] = true
    setSeatInfo(data)
    setShopId(data.shop_id)
  }

  return (
    <PageContainer>
      <div className={classes.flex}>
        <h2>利用状況確認</h2>
        <h2 className={classes.margin}>
          {statistics_number}
          <span className={classes.size}>(使用中/総席数)</span>
        </h2>
        <div className={classes.margin}>
          <Controller
            as={MUSelect}
            name="shop_id"
            label="店舗選択"
            values={shops}
            control={control}
          />
          <SubmitButton
            color="primary"
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            確認
          </SubmitButton>
        </div>
      </div>
      <LineProgress value={rate} />
    </PageContainer>
  )
}
