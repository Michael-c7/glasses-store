import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,

  GET_PRODUCTS_START,
  GET_PRODUCTS,
  IS_PRODUCTS_ERROR,

} from '../actions'

const initialState = {
  isSidebarOpen: false,
  products:[],
  isProductsLoading:false,
  isProductsError:false,
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

  const getProducts = async (url) => {
    dispatch({type: GET_PRODUCTS_START})
    try {
      const data = await fetch(url).then((res) => res.json())
      dispatch({type:GET_PRODUCTS, payload:data.records})

    } catch(error) {
      dispatch({type:IS_PRODUCTS_ERROR})
      console.log(error.message)
    }
  }



  React.useEffect(() => {
    getProducts(process.env.REACT_APP_GLASSES_DATA_URL)
  }, [])

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



// make sure to use this hook
export const useProductsContext = () => {
  return useContext(ProductsContext)
}