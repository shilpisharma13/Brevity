'use client'

import React, { useState } from 'react'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../../utils/helpers'
// import { FaCheck } from 'react-icons/fa'

const Filters = ({ sneakers }) => {
  const [search, setSearch] = useState('')

  const updateFilters = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
    setSearch(value)
  }
  const companies = getUniqueValues(sneakers, 'brand')

  return (
    <div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            name='text'
            placeholder='search'
            value={search}
            onChange={updateFilters}
          />
          <h5>Brand</h5>
          <div>
            {companies.map((c, index) => {
              return (
                <div key={index}>
                  <button type='button' name='company' onClick={updateFilters}>
                    {c}
                  </button>
                </div>
              )
            })}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Filters
