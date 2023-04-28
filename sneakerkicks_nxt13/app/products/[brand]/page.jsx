import { use } from 'react'

// async function fetchBrandProducts(brand) {
//   const response = await fetch(`http://localhost:4000/sneakers?brand=${brand}`)
//   const data = await response.json()
//   return data
// }

const BrandFilteredProducts = ({ params: { brand } }) => {
  // const product = use(fetchBrandProducts(brand))
  console.log(params)
  return <div>{brand} products</div>
}
export default BrandFilteredProducts
