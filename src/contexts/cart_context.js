
import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'


import {
  ADD_PRODUCTS_TO_CART,
  UPDATE_CART_AMOUNT,
  } from '../actions'


const initialState = {
  productsInCart:[],
  subTotal:0,
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
      console.log('removeCartItem')
    }

    const calculateSubTotal = () => {
      console.log('calculateSubTotal')
            /*
      1. unit price of each item * them quantity(eg: item costs $20, have 4 of them 4 * 20)
      2. do this for all items
      3. add the cost of all items up,this the sub-total
      4. add flat shipping rate ($5) to sub total, this is the total
      */
    }


    // React.useEffect(() => {
    //   console.log(state.productsInCart)
    // }, [state])

    return (
        <CartContext.Provider
          value={{
             ...state,
             addProductToCart,
             changeCartItemAmount,
        
        }}>
          {children}
        </CartContext.Provider>
      )
}


// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}