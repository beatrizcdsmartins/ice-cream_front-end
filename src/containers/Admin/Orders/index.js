import Sheet from '@mui/joy/Sheet'
import Table from '@mui/joy/Table'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formateDate from '../../../utils/formatDate'
import status from './order-status'
import Row from './row'
import { Container, Menu, LinkMenu } from './styles'
function Orders() {
  const [orders, setOrders] = useState([])
  const [activeStatus, setActiveStatus] = useState(1)
  const [filteredOrders, setFilteredOrders] = useState([])
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders')

      setOrders(data)
      setFilteredOrders(data)
    }

    loadOrders()
  }, [])

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formateDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = filteredOrders.map(ord => createData(ord))
    setRows(newRows)
  }, [filteredOrders])

  useEffect(() => {
    if (activeStatus === 1) {
      setFilteredOrders(orders)
    } else {
      const statusIndex = status.findIndex(sts => sts.id === activeStatus)
      const newFilteredOrders = orders.filter(
        order => order.status === status[statusIndex].value
      )
      setFilteredOrders(newFilteredOrders)
    }
  }, [orders])

  function handleStatus(status) {
    if (status.id === 1) {
      setFilteredOrders(orders)
    } else {
      const newOrders = orders.filter(order => order.status === status.value)
      setFilteredOrders(newOrders)
    }
    setActiveStatus(status.id)
  }
  return (
    <Container>
      <Menu>
        {status &&
          status.map(status => (
            <LinkMenu
              key={status.id}
              onClick={() => handleStatus(status)}
              isActiveStatus={activeStatus === status.id}
            >
              {status.label}
            </LinkMenu>
          ))}
      </Menu>
      <Sheet>
        <Table aria-label="collapsible table">
          <thead>
            <tr>
              <th style={{ width: 40 }} aria-label="empty" />
              <th style={{ width: '40%' }}>Pedido</th>
              <th>Cliente</th>
              <th>Data do pedido</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </tbody>
        </Table>
      </Sheet>
    </Container>
  )
}

export default Orders
