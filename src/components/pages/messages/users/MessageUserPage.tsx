import React, { useEffect } from 'react'

import { PageContainer } from '../../../atoms'
import { Message } from '../../../../libs/model/Message'
import { useMessageInfo } from '../../../../hooks/useMessage'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

export const MessageUserPage: React.FC = () => {
  const { messageInfoEM, messagesData, setMessageInfo } = useMessageInfo()

  useEffect(() => {
    setMessageInfo({ user_flg: true })
  }, [])

  return (
    <PageContainer>
      <h2>お知らせ</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', width: '10' }}>
                配信日
              </TableCell>
              <TableCell style={{ fontWeight: 'bold', width: '30%' }}>
                配信店舗
              </TableCell>
              <TableCell style={{ fontWeight: 'bold', width: '20%' }}>
                タイトル
              </TableCell>
              <TableCell style={{ fontWeight: 'bold', width: '40%' }}>
                本文
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messagesData.messages.map((message: Message) => (
              <TableRow key={message.id}>
                <TableCell>{message.created_at}</TableCell>
                <TableCell>{message.shop_name}</TableCell>
                <TableCell>{message.title}</TableCell>
                <TableCell>{message.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  )
}
