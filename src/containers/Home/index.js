import React from 'react'

import HomeLogo from '../../assets/banner_home.jpg'
import CategoryCarousel from '../../Components/Button/CategoryCarousel'
import OffersCarousel from '../../Components/Button/OffersCarrousel'
import { Header } from '../../Components/Header'
import { Container, HomeImg } from './styles'
function Home() {
  return (
    <Container>
      <Header />
      <HomeImg src={HomeLogo} alt="banner_home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}

export default Home
