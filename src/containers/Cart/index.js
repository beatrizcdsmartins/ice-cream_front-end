import React from 'react'

import CartLogo from '../../assets/banner_carrinho.jpg'
// import CategoryCarousel from '../../Components/Button/CategoryCarousel'
// import OffersCarousel from '../../Components/Button/OffersCarrousel'
import { CartItems } from '../../Components/CartItems'
import { CartResume } from './../../Components/CartResume'
import { Container, CartImg, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="banner_home" />
      <Wrapper>
        <CartItems />
        <CartResume></CartResume>
      </Wrapper>
    </Container>
  )
}
