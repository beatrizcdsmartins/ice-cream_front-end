import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import { useCart } from '../../hooks/CartContext'
import Button from '../Button'
import { Container, Image, ProductName, Price } from './styles'

function CardProduct({ product }) {
  const { putProductInCart } = useCart()
  const { push } = useHistory()
  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />

      <div>
        <ProductName>{product.name}</ProductName>
        <Price>{product.formatedPrice}</Price>
        <Button
          onClick={() => {
            push('/carrinho')
            putProductInCart(product)
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

export default CardProduct

CardProduct.propTypes = {
  product: PropTypes.object
}
