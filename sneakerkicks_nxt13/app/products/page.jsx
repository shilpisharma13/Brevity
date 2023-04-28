'use client'

import { use, useEffect, useContext } from 'react'
import Filter from '../components/Filter'
import Products from '../components/Products'
import Sort from '../components/Sort'
import { FilterProvider, useFilterContext } from '../context/filter_context'

async function fetchProducts() {
  const response = await fetch('http://localhost:4000/sneakers')
  const data = await response.json()
  return data
}

// useEffect(() => {}, [])

const Page = () => {
  const sneakers = use(fetchProducts())
  return (
    // <div className=''>
    <div>
      <Sort />
      {/* </div> */}

      <div className='grid grid-cols-2 justify-items-start'>
        <div>
          <Filter sneakers={sneakers} />
        </div>
        <div>
          <Products sneakers={sneakers} />
        </div>
      </div>
    </div>
  )
}

export default Page
