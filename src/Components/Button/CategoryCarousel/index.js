import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import api from '../../../services/api'
import { Container, H1, ContainerItens, Image, Button } from './styles'
function OffersCarousel() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }

    loadCategories()
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
      <H1>Categorias</H1>
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakpoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItens key={category.id}>
              <Image src={category.url} alt="foto categoria" />
              <Button
                to={{
                  pathname: '/produtos',
                  state: { categoryId: category.id }
                }}
              >
                {category.name}
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}

export default OffersCarousel
