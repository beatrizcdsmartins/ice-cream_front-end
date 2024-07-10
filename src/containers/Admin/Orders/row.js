import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import IconButton from '@mui/joy/IconButton'
import Sheet from '@mui/joy/Sheet'
import Table from '@mui/joy/Table'
import Typography from '@mui/joy/Typography'
import PropTypes from 'prop-types'
import React from 'react'
import ReactSelect from 'react-select'

import api from '../../../services/api'
import status from './order-status'
import { ProductImg } from './styles'

function Row({ row, setOrders, orders }) {
  const [open, setOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  async function setNewStatus(id, status) {
    setIsLoading(true)
    try {
      await api.put(`orders/${id}`, { status })

      const newOrders = orders.map(order => {
        return order._id === id ? { ...order, status } : order
      })
      setOrders(newOrders)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <React.Fragment>
      <tr>
        <td>
          <IconButton
            aria-label="expand row"
            variant="plain"
            color="neutral"
            size="sm"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </td>

        <td>{row.orderId}</td>
        <td>{row.name}</td>
        <td>{row.date}</td>
        <td>
          <ReactSelect
            options={status.filter(sts => sts.value !== 'Todos')}
            menuPortalTarget={document.body}
            placeholder="status"
            defaultValue={
              status.find(option => option.value === row.status) || null
            }
            onChange={newStatus => setNewStatus(row.orderId, newStatus.value)}
            isLoading={isLoading}
          />
        </td>
      </tr>
      <tr>
        <td style={{ height: 0, padding: 0 }} colSpan={6}>
          {open && (
            <Sheet
              variant="soft"
              sx={{
                p: 1,
                pl: 6,
                boxShadow: 'inset 0 3px 6px 0 rgba(0 0 0 / 0.08)'
              }}
            >
              <Typography level="body-lg" component="div">
                Pedido
              </Typography>
              <Table borderAxis="bothBetween" size="sm" aria-label="purchases">
                <thead>
                  <tr>
                    <th>Quantidade</th>
                    <th>Produto</th>
                    <th>Categoria</th>
                  </tr>
                </thead>
                <tbody>
                  {row.products.map(productRow => (
                    <tr key={productRow.id}>
                      <th scope="row">{productRow.quantity}</th>
                      <td>{productRow.name}</td>
                      <td>{productRow.category}</td>
                      <td>
                        <ProductImg
                          src={productRow.url}
                          alt="Imagem do produto"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Sheet>
          )}
        </td>
      </tr>
    </React.Fragment>
  )
}

Row.propTypes = {
  orders: PropTypes.array,
  setOrders: PropTypes.func,
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
}

export default Row
