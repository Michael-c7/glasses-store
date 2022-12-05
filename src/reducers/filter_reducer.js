import {
    MOBILE_FILTER_MENU_OPEN,
    MOBILE_FILTER_MENU_CLOSE,
    CATEGORY_FILTERS,
    SORT_FILTERS,
    UPDATE_CATEGORY_FILTERS,
    SET_FILTERED_PRODUCTS,
  } from '../actions'

import Products from '../pages/Products'



const filter_reducer = (state, action) => {


    if(action.type === MOBILE_FILTER_MENU_OPEN) {
        return {...state, isMobileFilterOpen:true}
    }


    if(action.type === MOBILE_FILTER_MENU_CLOSE) {
        return {...state, isMobileFilterOpen:false}
    }


    if(action.type === SET_FILTERED_PRODUCTS) {
        return {...state, filteredProducts:action.payload}
    }


    if(action.type === UPDATE_CATEGORY_FILTERS) {
        let categoryFiltersState = state.categoryFilters
        let categoryName = action.payload.filterName
        let categoryValue = action.payload.filterValue
        /*
            categoryFilters:{
                searchTerm:'',
                gender:[],
                brand:[],
                materials:[],
                color:[],
                price:{min:0, max:0},
            }
        */
        
        return {
            ...state,
            categoryFilters:{...categoryFiltersState,[categoryName]:categoryValue}
        }
    }





    if(action.type === CATEGORY_FILTERS) {

        let tempProducts = [...action.payload]
        const { searchTerm, gender, brand, materials, color, price } = state.categoryFilters


        if(searchTerm) {
            tempProducts = tempProducts.filter((el) => el.fields.name.includes(searchTerm.toLowerCase())) 
        }

        if(gender.length > 0) {
            tempProducts = tempProducts.filter((el) => gender.includes(el.fields.gender))
        }

        if(brand.length > 0) {
            tempProducts = tempProducts.filter((el) => brand.includes(el.fields.brand))
        }

        if(materials.length > 0) {
            tempProducts = tempProducts.filter((el) => materials.includes(el.fields.materials))
        }

        if(color.length > 0) {
            tempProducts = tempProducts.filter((el) => color.some(r => el.fields.colors.split(',').includes(r)))
        }

        if(price) {
            let minPrice = Number(price.min)
            let maxPrice = Number(price.max)

            tempProducts = tempProducts.filter((el) => {
                let productPrice = Number(el.fields.price)
                if(productPrice >= minPrice && productPrice <= maxPrice) {
                    return el
                }
            })
        }


        return {...state, filteredProducts:tempProducts}
    }



    
    if(action.type === SORT_FILTERS) {
        return {...state, }
    }







    throw new Error(`No Matching "${action.type}" - action type`)
}


export default filter_reducer
