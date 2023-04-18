import React from 'react'
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '@/actions'

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true }
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    return { ...state, products_loading: false, products: action.payload }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, product_error: true }
  }
  throw new Error(`No matching ${action.type} - action type`)
}

export default products_reducer
