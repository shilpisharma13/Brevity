import Link from 'next/link'
import { use } from 'react'

async function fetchSingleProduct(id) {
  const response = await fetch(`http://localhost:4000/sneakers?id=${id}`)
  const data = await response.json()
  return data
}

const Product = ({ id }) => {
  const product = use(fetchSingleProduct(id))
  const { image, brand, name, retailPrice } = product

  return (
    <>
      <div className='grid-cols-2'>
        <img className='w-20' src={image.thumbnail} alt={brand} />
        {name}- ${retailPrice}
      </div>
      <Link href={'/products'}>
        <button className='bg-zinc-600 rounded-full'>Back</button>
      </Link>
    </>
  )
}
export default Product
