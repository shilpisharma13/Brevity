import { useProductsContext } from '@/context/product_context'
import React from 'react'
import styled from 'styled-components'
import SingleProduct from './SingleProduct'

const Products = () => {
  const { products, products_loading } = useProductsContext()

  if (products_loading) return <h1>Loading....</h1>

  return (
    <Wrapper>
      <div className='container'>
        {products.map((product) => {
          return <SingleProduct key={product.id} {...product} />
        })}
      </div>
    </Wrapper>
  )
}

export default Products
const Wrapper = styled.div`
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  img {
    width: 120px;
  }
  li {
    list-style-type: none;
  }
`
