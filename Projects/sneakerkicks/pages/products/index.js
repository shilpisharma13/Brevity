import React from 'react'
import { Filter, Products } from '@/components'
import SingleProduct from '@/components'
import Link from 'next/link'
import Product from '@/components/product'

const ProductDisplay = ({ shoes }) => {
  return (
    <div>
      <Filter />
      {shoes.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`products/${product.id}`}>
              <Product {...product} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ProductDisplay

export async function getStaticProps() {
  const response = await fetch('http://localhost:4000/sneakers')
  const data = await response.json()

  return {
    props: {
      shoes: data.filter((shoe) => shoe.image.original !== ''),
    },
  }
}
