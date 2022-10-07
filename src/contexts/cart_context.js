import React, { useEffect, useContext, useReducer } from "react";

import reducer from '../reducers/cart_reducer'

// import an action here eg: SIDEBAR_OPEN

// import {
//     SIDEBAR_OPEN,
//     SIDEBAR_CLOSE,
// } from '../actions'


const initialState = {}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)





    return (
        <CartProvider.Provider value='cart context test value'>
            {children}
        </CartProvider.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}