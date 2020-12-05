import React from 'react'
import { PageContainer } from '../../../atoms'
import { initialUtilizationHistoryState } from '../../../../libs/model/UtilizationTime'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

type Props = {
  utilizationsHistory: initialUtilizationHistoryState
}

export const UtilizationHistory: React.FC<Props> = (props) => {
  const { utilizationsHistory } = props
  return (
    <PageContainer>
      <h2>利用履歴</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>座席番号</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>座席タイプ</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>開始時間</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>終了時間</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {utilizationsHistory.map((u) => (
              <TableRow key={u.utilization_id}>
                <TableCell>{u.number}</TableCell>
                <TableCell>{u.seat_type}</TableCell>
                <TableCell>{u.started_at}</TableCell>
                <TableCell>{u.finished_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  )
}
