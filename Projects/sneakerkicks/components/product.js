import React from 'react'
import styled from 'styled-components'

const Product = ({ image, brand, name, retailPrice }) => {
  return (
    <>
      <div className='grid-cols-2'>
        <img className='w-20' src={image.thumbnail} alt={brand} />
        {name}- ${retailPrice}
      </div>
    </>
  )
}

export default Product

// const Wrapper = styled.div`
//   .container {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//   }
//   img {
//     width: 100px;
//   }
// `
