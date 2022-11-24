import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'

import {
  MOBILE_FILTER_MENU_OPEN,
  MOBILE_FILTER_MENU_CLOSE,
} from '../actions'

import { useProductsContext } from '../contexts/products_context'

const initialState = {
  isMobileFilterOpen:false,
  filteredProducts:[],
  filterCategories:{
    searchTerm:'',
    gender:[],
    brand:[],
    materials:[],
    color:[],
    price:[],
  }
}

const FilterContext = React.createContext()


export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const { products } = useProductsContext()

    /*
    type: 'single' - only one thing you want in the string eg:'cat' 
    type: 'multi' - will be for a comma separated list eg: pink,orange,silver  
    */
    const getUniqueProductValues = (propertyToGet, type = 'single') => {
      let firstThing = [...new Set(products?.map((item) => {
        if(item.fields[propertyToGet]) {          
          return item.fields[propertyToGet]
        } else {
          throw new Error(`${propertyToGet} cannot be found`)
        }
      }))]
      
      if(type.toLowerCase() === 'single') {
        return firstThing

      } else if(type.toLowerCase() === 'multi') {

        let secondThing = [...new Set(firstThing.map((el) => el.split(',')).flat())]
        return secondThing
      } else {
        throw new Error(`${type} is an incorrect type, please choose a correct type (either 'single' or 'multi')`)
      }

    }



    const openMobileFilterMenu = _ => {
      dispatch({ type: MOBILE_FILTER_MENU_OPEN })
      
    }
  
    const closeMobileFilterMenu = _ => {
      dispatch({ type: MOBILE_FILTER_MENU_CLOSE })
    }


    // React.useEffect(() => {
    //   console.log(products)
    // })

    return (
        <FilterContext.Provider
          value={{
            ...state,
            getUniqueProductValues,
            openMobileFilterMenu,
            closeMobileFilterMenu,
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