
import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'

import {
  ADD_PRODUCTS_TO_CART,
  UPDATE_CART_AMOUNT,
  REMOVE_CART_ITEM,
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_PRODUCTS_IN_CART,
  REMOVE_ALL_PRODUCTS_IN_CART,
  GENERATE_ORDER_NUMBER,
  } from '../actions'


const initialState = {
  productsInCart:[],
  subTotal:0,
  totalProductsInCart:0,
  shipping:5,
  orderNumber:null,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const addProductToCart = (product, amount = 1) => {
      dispatch({ type: ADD_PRODUCTS_TO_CART, payload:{product, amount} })
    }

    const changeCartItemAmount = (itemId, itemAmount) => {
      dispatch({ type:UPDATE_CART_AMOUNT, payload:{itemId, itemAmount} })
    }

    const removeCartItem = (itemId) => {
      dispatch({ type:REMOVE_CART_ITEM, payload:itemId })
    }

    const calculateSubTotal = _ => {
      dispatch({ type:CALCULATE_SUBTOTAL })
    }

    const calculateTotalProductsInCart = () => {
      dispatch({ type:CALCULATE_TOTAL_PRODUCTS_IN_CART })
    }

    const removeAllProductsInCart = () => {
      dispatch({ type:REMOVE_ALL_PRODUCTS_IN_CART })
    }

    const generateOrderNumber = _ => {
      dispatch({type: GENERATE_ORDER_NUMBER })
    }

    React.useEffect(() => {
      calculateTotalProductsInCart()
    }, [state.productsInCart])

    return (
        <CartContext.Provider
          value={{
             ...state,
             addProductToCart,
             changeCartItemAmount,
             removeCartItem,
             calculateSubTotal,
             calculateTotalProductsInCart,
             removeAllProductsInCart,
            generateOrderNumber,
        }}>
          {children}
        </CartContext.Provider>
      )
}


export const useCartContext = () => {
  return useContext(CartContext)
}