import React from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Toolbar from '@material-ui/core/Toolbar'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}))

const icons = [<AddIcon />, <EditIcon />]

const links = ['./shop_new', './shop_edit']

export const ShopSidebar: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const [cookie, setCookie, removeCookie] = useCookies([
    'token',
    'position',
    'fl_msg',
  ])

  const logout = () => {
    removeCookie('token')
    removeCookie('position')
    setCookie('fl_msg', 'ログアウトしました。', {})
    window.location.href = './user_login'
  }

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['店舗作成', '店舗編集'].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => history.push(links[index])}
              >
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem button onClick={logout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="ログアウト" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  )
}
