import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import Cart from '../../assets/cart.svg'
import LoginImg from '../../assets/login-person.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  ContainerText
} from './styles'

export function Header() {
  const { logout, userData } = useUser()
  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push(`/`)} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push(`/produtos`)}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => push(`/carrinho`)}>
          {' '}
          <img className="carrinho" src={Cart} alt="carrinho" />
        </PageLink>
        <PageLink>
          {' '}
          <img src={LoginImg} alt="login" />
        </PageLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLink onClick={logoutUser} className="sair">
            Sair
          </PageLink>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
