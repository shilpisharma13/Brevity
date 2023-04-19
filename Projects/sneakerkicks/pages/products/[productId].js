import React from 'react'
import { useRouter } from 'next/router'
import Product from '@/components/product'
import Link from 'next/link'

const SingleProduct = ({ product }) => {
  return (
    <>
      <Product {...product} />
      <Link href={'/products'}>
        <button className='bg-zinc-600 rounded-full'>Back</button>
      </Link>
      {/* <h2>{product.name}</h2>
      <p>{product.retailPrice}</p> */}
    </>
  )
}

export default SingleProduct

export async function getStaticPaths() {
  const response = await fetch('http://localhost:4000/sneakers')
  const data = await response.json()

  const paths = data.map((product) => {
    return {
      params: {
        productId: `${product.id}`,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `http://localhost:4000/sneakers/${params.productId}`
  )
  const data = await response.json()

  return {
    props: {
      product: data,
    },
  }
}
