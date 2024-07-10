import CancelIcon from '@mui/icons-material/Cancel'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import apiCodeIce from '../../../services/api'
import paths from '../../../utils/constants/paths'
import formatCurrency from '../../../utils/formatCurrency'
import EditProduct from '../EditProduct'
import { Container, Img, Edition } from './styles'

function ListProducts() {
  const [products, setProducts] = useState()
  const { push } = useHistory()
  useEffect(() => {
    async function loadOrders() {
      const { data } = await apiCodeIce.get('products')

      setProducts(data)
    }

    loadOrders()
  }, [])

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: 'green' }} />
    }
    return <CancelIcon style={{ color: 'darkred' }} />
  }

  function editProduct(product) {
    push(paths.EditProduct, { product })
  }
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Produto em Oferta</TableCell>
              <TableCell align="center">Foto</TableCell>
              <TableCell>Editar Produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell>
                    <Img src={product.url} alt="imagem produto" />
                  </TableCell>
                  <TableCell>
                    <Edition onClick={() => editProduct(product)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts
