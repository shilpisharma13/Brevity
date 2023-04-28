import Product from '@/app/components/Product'

const SingleProduct = ({ params: { productId } }) => {
  
  // console.log(productId)
  return (
    <div>
      <h1>Description of Product </h1>
      <Product id={productId} />
    </div>
  )
}

export default SingleProduct
