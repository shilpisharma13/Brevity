import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const SingleProduct = ({ id, brand, image, name, retailPrice }) => {
  return <div>Single Product</div>

  // return (
  //   <Wrapper>
  //     <img src={image.small} alt={brand} />
  //     {name}- ${retailPrice}
  //   </Wrapper>
  // )
}

export default SingleProduct

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
