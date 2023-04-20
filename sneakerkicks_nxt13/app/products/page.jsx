import Link from 'next/link'

async function fetchProducts() {
  const response = await fetch('http://localhost:4000/sneakers')
  const data = await response.json()
  return data
}

const Products = async () => {
  const sneakers = await fetchProducts()

  return (
    <div>
      {sneakers
        .filter((shoe) => shoe.image.original !== '')
        .map((product) => {
          const { id, image, name, brand, retailPrice } = product
          return (
            <div key={product.id}>
              <Link href={`products/${product.id}`}>
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
