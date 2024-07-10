import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import ProductsLogo from '../../assets/banner_products.jpg'
import CardProduct from '../../Components/CardProduct'
import apiCodeIce from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container, CategoryButton, ProductsContainer } from './styles'
function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)
  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeIce.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await apiCodeIce.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })
      setProducts(newProducts)
    }
    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setfilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category.id === activeCategory
      )

      setfilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])
  return (
    <Container>
      <div className="containerItens">
        {' '}
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </div>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

export default Products

Products.propTypes = {
  location: PropTypes.object
}
