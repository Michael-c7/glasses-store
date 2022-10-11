import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,

} from '../actions'

const initialState = {
  isSidebarOpen: false,
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <ProductsContext.Provider
      value={{
        ...state,

      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}