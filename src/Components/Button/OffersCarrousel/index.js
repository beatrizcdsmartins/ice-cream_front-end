import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'

import { useCart } from '../../../hooks/CartContext'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, H1, ContainerItens, Image, Button } from './styles'
function CategoryCarousel() {
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()
  const { push } = useHistory()
  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })
      setOffers(onlyOffers)
    }

    loadOffers()
  }, [])

  const breakpoints = [
    {
      width: 1,
      itemsToShow: 1
    },
    {
      width: 400,
      itemsToShow: 2
    },
    {
      width: 600,
      itemsToShow: 3
    },
    {
      width: 900,
      itemsToShow: 4
    },
    {
      width: 1300,
      itemsToShow: 5
    }
  ]
  return (
    <Container>
      <H1>Ofertas</H1>
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakpoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItens key={product.id}>
              <Image src={product.url} alt="foto oferta" />
              <p className="offerName">{product.name}</p>
              <p className="price">{product.formatedPrice}</p>
              <Button
                onClick={() => {
                  push('/carrinho')
                  putProductInCart(product)
                }}
              >
                Peça agora
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}

export default CategoryCarousel
