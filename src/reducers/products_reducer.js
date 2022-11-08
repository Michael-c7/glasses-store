import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_START,
    GET_PRODUCTS,
    IS_PRODUCTS_ERROR,
  } from '../actions'
  
  const products_reducer = (state, action) => {
    if (action.type === SIDEBAR_OPEN) {
      return { ...state, isSidebarOpen: true }
    }
    if (action.type === SIDEBAR_CLOSE) {
      return { ...state, isSidebarOpen: false }
    }

    /*
    GET_PRODUCTS
    IS_PRODUCTS_ERROR
    */

    if(action.type === GET_PRODUCTS_START) {
      return {...state, isProductsLoading:true}
    }

    if(action.type === GET_PRODUCTS) {
      return {
        ...state,
        products:action.payload,
        isProductsLoading:false,
        isProductsError:false,
      }
    }

    if(action.type === IS_PRODUCTS_ERROR) {
      return {...state,  isProductsError:true, isProductsLoading:false}
    }

    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
  export default products_reducer