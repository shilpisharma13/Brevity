import React, { useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
// import { options } from '@/utils/constants'
// import { sneakers } from '@/utils/sneakers'
import reducer from '../reducers/products_reducer'
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '@/actions'

const initiaState = {
  products_loading: false,
  products_error: false,
  products: [],
}
const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initiaState)

  const fetchProducts = async () => {
    try {
      dispatch({ type: GET_PRODUCTS_BEGIN })
      // const { data } = await axios.request(options)
    //  const sneakers = data.results
    
    const response = await fetch('http://localhost:4000/sneakers')
   
     const sneakers = await response.json()
   
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: sneakers })
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR })
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductsContext.Provider value={...state}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
