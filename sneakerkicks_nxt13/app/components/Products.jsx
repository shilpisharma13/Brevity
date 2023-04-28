'use client'

import React from 'react'
import Link from 'next/link'

const Products = ({ sneakers }) => {
  const { brand } = sneakers
  // console.log(sneakers[0].brand)
  // let tempArray = sneakers
  //   .filter((shoe) => shoe.image.original !== '')
  //   .flatMap((product) => product.brand)
  // console.log(tempArray)
  return (
    <div className='grid grid-cols-3'>
      {sneakers
        .filter((shoe) => shoe.image.original !== '')
        .map((product) => {
          const { id, image, name, brand, retailPrice } = product
          return (
            <div key={id}>
              <Link href={`products/${id}`}>
                <div className='grid-cols-2'>
                  <img className='w-20' src={image.thumbnail} alt={brand} />
                  {name}- ${retailPrice}
                </div>
              </Link>
            </div>
          )
        })}
    </div>
  )
}

export default Products

// generateStaticParams
