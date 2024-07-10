import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import Button from '../../Components/Button'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container, ContainerItems } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProducts, deliveryTax])

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'realizando seu pedido...',
      sucess: 'pedido realizado com sucesso',
      error: 'falha ao realizar o pedido, tente novamente.'
    })
  }
  return (
    <Container>
      <ContainerItems>
        <h3>Resumo do pedido</h3>
        <div className="containerItens">
          <p>Itens</p>
          <p>{formatCurrency(finalPrice)}</p>
        </div>
        <div className="containerTaxa">
          <p>Taxa de entrega</p>
          <p>{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="containerTot">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </ContainerItems>
      <Button onClick={submitOrder}>Finalizar Pedido</Button>
    </Container>
  )
}
