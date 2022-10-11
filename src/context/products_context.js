import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'



const initialState = {}

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