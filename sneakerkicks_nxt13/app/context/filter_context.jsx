'use client'

import React, {
  useEffect,
  createContext,
  useContext,
  useReducer,
  useDeferredValue,
} from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../../utils/actions'
import { use } from 'react'

const initialState = {
  filtered_products: [],
  all_products: [],
  filters: {
    text: '',
    brand: 'all',
    price: 0,
  },
}

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const loadProducts = () => {}
  return (
    <FilterContext.Provider value={state}>{children}</FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
