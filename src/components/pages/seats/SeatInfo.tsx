import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
  ErrorMessage,
  MUCollapase,
  PageContainer,
  SubmitButton,
  TextForm,
  TransitionsModal,
} from '../../atoms'
import { Seat } from '../../../libs/model/Seat'
import { useSeatNew, useSeatEdit } from '../../../hooks/useSeat'
import { useEffectCustom } from '../../../hooks/useEffectCustom'
import { SeatSearch } from '../../../libs/model/Seat'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles({
  center: {
    textAlign: 'center',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    height: '50px',
    margin: 'auto 0',
  },
})

type Props = {
  seatInfoEM: never[]
  seatsData: never[]
  setChoice: React.Dispatch<React.SetStateAction<{}>>
  setSeatInfo: (data: SeatSearch) => Promise<void>
}

export const SeatInfo: React.FC<Props> = (props) => {
  const { seatInfoEM, seatsData, setChoice, setSeatInfo } = props
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [collOpen, setCollOpen] = useState(false)
  const [selectData, setSelectData] = useState({
    id: 0,
    number: 0,
    seat_type: '',
    shop_id: 0,
  })
  const { seatNewEM, setSeatNew } = useSeatNew()
  const { seatEditEM, setSeatEdit } = useSeatEdit()

  const { control, handleSubmit, setValue, reset } = useForm()

  const handleChoice = (data: Seat) => {
    setChoice(data)
  }

  const handleOpen = async (data: Seat) => {
    setSelectData(data)
    await setOpen(true)
    setValue('number', data.number)
    setValue('seat_type', data.seat_type)
  }

  const handleDelete = async (data: Seat) => {
    data['delete_flg'] = true
    await setSeatEdit(data)
  }

  const onSubmit = async (data: Seat) => {
    data['id'] = selectData.id
    await setSeatEdit(data)
  }

  const onSubmitNew = async (data: Seat) => {
    await setSeatNew(data)
  }

  useEffectCustom(() => {
    if (seatNewEM.length < 1) {
      reset({
        number: '',
        seat_type: '',
      })
      setCollOpen(false)
      setSeatInfo({})
    }
  }, [seatNewEM])

  useEffectCustom(() => {
    if (seatEditEM.length < 1) {
      setOpen(false)
      setSeatInfo({})
    }
  }, [seatEditEM])

  return (
    <>
      <PageContainer>
        <div className={classes.flex}>
          <h2>座席一覧</h2>
          <SubmitButton
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={() => setCollOpen(!collOpen)}
          >
            登録する
          </SubmitButton>
        </div>
        <MUCollapase collOpen={collOpen}>
          {seatNewEM.map((err: string) => (
            <ErrorMessage>{err}</ErrorMessage>
          ))}
          <div className={classes.flex}>
            <Controller
              as={TextForm}
              name="number"
              label="座席番号"
              control={control}
              type="number"
            />
            <Controller
              as={TextForm}
              name="seat_type"
              label="座席タイプ"
              control={control}
            />
            <SubmitButton
              color="primary"
              variant="contained"
              onClick={handleSubmit(onSubmitNew)}
              className={classes.button}
            >
              登録
            </SubmitButton>
          </div>
        </MUCollapase>
        {seatInfoEM.map((err: string) => (
          <ErrorMessage>{err}</ErrorMessage>
        ))}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>座席番号</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>座席タイプ</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>編集</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>削除</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {seatsData.map((seat: Seat) => (
                <TableRow
                  key={seat.id}
                  hover
                  onClick={() => handleChoice(seat)}
                >
                  <TableCell>{seat.id}</TableCell>
                  <TableCell>{seat.number}</TableCell>
                  <TableCell>{seat.seat_type}</TableCell>
                  <TableCell>
                    <SubmitButton
                      color="primary"
                      variant="contained"
                      onClick={() => handleOpen(seat)}
                    >
                      編集
                    </SubmitButton>
                  </TableCell>
                  <TableCell>
                    <SubmitButton
                      color="secondary"
                      variant="outlined"
                      onClick={() => handleDelete(seat)}
                    >
                      削除
                    </SubmitButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PageContainer>
      <TransitionsModal open={open} setOpen={setOpen}>
        {seatEditEM.map((err: string) => (
          <ErrorMessage>{err}</ErrorMessage>
        ))}
        <Controller
          as={TextForm}
          name="number"
          label="座席番号"
          control={control}
          type="number"
        />
        <Controller
          as={TextForm}
          name="seat_type"
          label="座席タイプ"
          control={control}
        />
        <div className={classes.center}>
          <SubmitButton
            color="primary"
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            更新
          </SubmitButton>
        </div>
      </TransitionsModal>
    </>
  )
}
