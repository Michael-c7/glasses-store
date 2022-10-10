
import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'


// import {

//   } from '../actions'


const initialState = {}

const CartContext = React.createContext()


export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CartContext.Provider
          value={{
             ...state,
        
        }}>
          {children}
        </CartContext.Provider>
      )
}