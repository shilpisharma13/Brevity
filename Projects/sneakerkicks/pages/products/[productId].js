import React from 'react'
import { useRouter } from 'next/router'
import Product from '@/components/product'
import Link from 'next/link'

const SingleProduct = ({ product }) => {
  const router = useRouter()
  if (router.isFallback) return <h1>Loading...</h1>

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

export async function getServerSideProps(context) {
  const { params, req, res, query } = context
  // console.log(req.headers.cookie)
  // res.setHeader('Set-Cookie', ['name=Sh'])
  const response = await fetch(
    `http://localhost:4000/sneakers/${params.productId}`
  )
  const data = await response.json()

  if (!data.id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product: data,
    },
  }
}

// export async function getStaticPaths() {
//   const response = await fetch('http://localhost:4000/sneakers')
//   const data = await response.json()

//   const paths = data.map((product) => {
//     return {
//       params: {
//         productId: `${product.id}`,
//       },
//     }
//   })
//   return {
//     paths,
//     fallback: true,
//   }
// }

// export async function getStaticProps(context) {
//   const { params, req, res, query } = context
//   // console.log(req.headers.cookie)
//   // res.setHeader('Set-Cookie', ['name=Sh'])
//   const response = await fetch(
//     `http://localhost:4000/sneakers/${params.productId}`
//   )
//   const data = await response.json()

//   if (!data.id) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {
//       product: data,
//     },
//   }
// }
