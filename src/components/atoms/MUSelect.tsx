import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  width: {
    minWidth: 300,
  },
})

type Props = {
  label: string
  values: any
}

export const MUSelect: React.FC<Props> = (props) => {
  const classes = useStyles()
  const { ...reset } = props
  const { label, values } = props
  return (
    <>
      <FormControl className={classes.width}>
        <InputLabel>{label}</InputLabel>
        <Select {...reset}>
          {values?.map((v: any) => (
            <MenuItem value={v.id}>{v.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
