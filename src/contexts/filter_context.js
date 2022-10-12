import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
// import {

//   } from '../actions'

const initialState = {}

const FilterContext = React.createContext()


export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


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