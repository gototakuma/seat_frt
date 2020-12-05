import React from 'react'

import { PageContainer } from '../../../atoms'
import { UtilizationSeat } from '../../../../libs/model/Seat'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

type Props = {
  utilizationSeats: never[]
}

export const InUseList: React.FC<Props> = (props) => {
  const { utilizationSeats } = props
  return (
    <PageContainer>
      <h2>利用中リスト</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>お客様ID</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>名前</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>座席番号</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>座席タイプ</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>開始時間</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {utilizationSeats.map((seat: UtilizationSeat) => (
              <TableRow key={seat.id} hover>
                <TableCell>{seat.user_id}</TableCell>
                <TableCell>{seat.name}</TableCell>
                <TableCell>{seat.number}</TableCell>
                <TableCell>{seat.seat_type}</TableCell>
                <TableCell>{seat.started_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  )
}
