import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()
  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon style={{ color: '#fff' }} />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#fff' }} />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
      <hr></hr>
    </Container>
  )
}

SideMenuAdmin.PropTypes = {
  path: PropTypes.string
}
