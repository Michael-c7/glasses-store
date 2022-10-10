import React, { useEffect, useContext, useReducer } from "react";
import reducer from '../reducers/products_reducer'

// import an action here eg: SIDEBAR_OPEN

// import {
//     SIDEBAR_OPEN,
//     SIDEBAR_CLOSE,
// } from '../actions'


const initialState = {
    
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

//   const openSidebar = () => {
//     dispatch({ type: SIDEBAR_OPEN })
//   }



  return (
    <FilterContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}