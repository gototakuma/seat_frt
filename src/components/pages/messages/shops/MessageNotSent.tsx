import React from 'react'

import { PageContainer, SubmitButton } from '../../../atoms'
import { Message } from '../../../../libs/model/Message'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

type Props = {
  messages: never[]
  setMessageEdit: (data: Message) => Promise<void>
}

export const MessageNotSent: React.FC<Props> = (props) => {
  const { messages, setMessageEdit } = props

  const handleSent = (data: Message) => {
    setMessageEdit(data)
  }

  return (
    <PageContainer>
      <h2>未送信</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>タイトル</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>本分</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>作成日時</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>配信</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((message: Message) => (
              <TableRow key={message.id}>
                <TableCell>{message.title}</TableCell>
                <TableCell>{message.description}</TableCell>
                <TableCell>{message.created_at}</TableCell>
                <TableCell>
                  <SubmitButton
                    color="primary"
                    variant="outlined"
                    onClick={() => handleSent(message)}
                  >
                    配信する
                  </SubmitButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  )
}
