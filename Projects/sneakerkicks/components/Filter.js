import React, { useEffect, useState } from 'react'

const Filter = () => {
  const [list, setList] = useState(null)

  const fetchNikeProducts = async () => {
    const response = await fetch('http://localhost:4000/sneakers?brand=Nike')
    const data = await response.json()
    console.log(data)
    setList(data)
  }


  return (
    <div>
      Filter Options -
      <button onClick={fetchNikeProducts}>Filter Nike Products</button>
    </div>
  )
}

export default Filter
