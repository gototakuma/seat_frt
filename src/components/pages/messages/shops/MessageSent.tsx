import React from 'react'

import { PageContainer } from '../../../atoms'
import { Message } from '../../../../libs/model/Message'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

type Props = {
  messages: never[]
}

export const MessageSent: React.FC<Props> = (props) => {
  const { messages } = props

  return (
    <PageContainer>
      <h2>送信済み</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>タイトル</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>本分</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>配信日時</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((message: Message) => (
              <TableRow key={message.id}>
                <TableCell>{message.title}</TableCell>
                <TableCell>{message.description}</TableCell>
                <TableCell>{message.updated_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  )
}
