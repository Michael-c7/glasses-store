import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'

import {
  MOBILE_FILTER_MENU_OPEN,
  MOBILE_FILTER_MENU_CLOSE,
  CATEGORY_FILTERS,
  SORT_FILTERS,
  UPDATE_CATEGORY_FILTERS,
  SET_FILTERED_PRODUCTS,
  UPDATE_SORT_FILTERS,
  CLEAR_FILTERS,
  GET_HIGHEST_PRICED_PRODUCT_AMT,
} from '../actions'

import { useProductsContext } from '../contexts/products_context'

const initialState = {
  isMobileFilterOpen:false,
  filteredProducts:[],
  highestPricedProductAmt:0,
  categoryFilters:{
    searchTerm:'',
    gender:[],
    brand:[],
    materials:[],
    color:[],
    price:{min:0, max:0},
  },
  sortFilters:{
    sortBy:'',
    amountToShow:'',
  },
  
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


    const updateCategoryFilters = (filterValue,filterName) => {
      dispatch({
         type: UPDATE_CATEGORY_FILTERS,
         payload:{filterValue, filterName},
      })
    }

    const setFiltersProduct = _ => {
      dispatch({type:SET_FILTERED_PRODUCTS, payload:products})
    }


    const categoryFilterFunctionality = unfilteredProducts => {
      dispatch({ type: CATEGORY_FILTERS, payload:products })
    }


    const updateSortFilters = (sortValue, sortName) => {
      dispatch({ type: UPDATE_SORT_FILTERS, payload:{sortValue, sortName} })
    }


    const sortFilterFunctionality = (products) => {
      dispatch({ type: SORT_FILTERS, payload:products })
    }


    const GetHighestPricedProductAmt = products => {
      dispatch({ type: GET_HIGHEST_PRICED_PRODUCT_AMT, payload:products })
    }


    const clearFilters = _ => {
      dispatch({ type:CLEAR_FILTERS })
    }







    React.useEffect(() => {
      setFiltersProduct()

      GetHighestPricedProductAmt(products)
    },[products])

    



    return (
        <FilterContext.Provider
          value={{
            ...state,
            getUniqueProductValues,
            openMobileFilterMenu,
            closeMobileFilterMenu,
            categoryFilterFunctionality,
            sortFilterFunctionality,
            updateCategoryFilters,
            updateSortFilters,
            clearFilters,
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