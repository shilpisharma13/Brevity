import { useProductsContext } from '@/context/product_context'
import React from 'react'
import styled from 'styled-components'
import SingleProduct from './SingleProduct'

const Products = ({ product }) => {
  const { products, products_loading } = useProductsContext()

  if (products_loading) return <h1>Loading....</h1>

  return (
    <Wrapper>
      <div className='container'>
        <SingleProduct key={product.id} {...product} />
      </div>
    </Wrapper>
  )
}

export default Products
const Wrapper = styled.div`
  .container {
    display: flex;
    grid-template-columns: 1fr 1fr 1fr;
  }
  img {
    width: 120px;
  }
  li {
    list-style-type: none;
  }
`
