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

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
    document.body.style.overflow = 'hidden'
    
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
    document.body.style.overflow = 'visible'
  }


  React.useEffect(() => {
    console.log()
  })






  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}