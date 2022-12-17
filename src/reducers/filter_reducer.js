import React from 'react'
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
    SHOW_GRID_VIEW,
    SHOW_LIST_VIEW,
  } from '../actions'

import Products from '../pages/Products'

import { getNotUnique } from '../utility/misc'

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


        return {
            ...state,
            filteredProducts:tempProducts,
        }
    }



    if(action.type === UPDATE_SORT_FILTERS) {
        let sortFiltersState = state.sortFilters
        let sortName = action.payload.sortName
        let sortValue = action.payload.sortValue

        return {
            ...state,
            sortFilters:{...sortFiltersState,[sortName]:sortValue}
        }
    }


    if(action.type === SORT_FILTERS) {
        let sortFiltersState = state.sortFilters
        let tempProducts = []



  
        if(sortFiltersState.sortBy === 'default') {
            let productsCopy = [...action.payload]
            const combo = [...state.filteredProducts, ...productsCopy]
            const comboIds = combo.map((el) => el.id)
            let uniqueIds = Array.from(new Set (getNotUnique(comboIds)))
            tempProducts = productsCopy.filter((el) => uniqueIds.some(r => el.id.split(',').includes(r)))
        }


        if(sortFiltersState.sortBy === 'price-lowest') {
            tempProducts = state.filteredProducts.sort((a,b) => a.fields.price - b.fields.price)
        }

        if(sortFiltersState.sortBy === 'price-highest') {
            tempProducts = state.filteredProducts.sort((a,b) => b.fields.price - a.fields.price)
        }

        if(sortFiltersState.sortBy === 'rating-highest') {
            tempProducts = state.filteredProducts.sort((a,b) => b.fields.rating - a.fields.rating)
        }

        if(sortFiltersState.sortBy === 'rating-lowest') {
            tempProducts = state.filteredProducts.sort((a,b) => a.fields.rating - b.fields.rating)
        }

        if(sortFiltersState.sortBy === 'name-a-z') {
            tempProducts = state.filteredProducts.sort((a, b) => a.fields.name.localeCompare(b.fields.name))
        }

        if(sortFiltersState.sortBy === 'name-z-a') {
            tempProducts = state.filteredProducts.sort((a, b) => b.fields.name.localeCompare(a.fields.name))
        }

        return {
            ...state,
            filteredProducts:tempProducts,
        }
    }

    if(action.type === GET_HIGHEST_PRICED_PRODUCT_AMT) {
        let products = action.payload
        let highestPrice = Math.max(...products.map((el) => el.fields.price))

        return {
            ...state,
            highestPricedProductAmt:highestPrice

        }
    }


    if(action.type === CLEAR_FILTERS) {
        // searchbar
            document.querySelector('#filter-searchbar').value = ''

        // checkboxes
            Array.from(document.querySelectorAll('#checkbox-input')).forEach((checkbox) => {
                checkbox.checked = false
            })

        // price
            let minPrice = document.querySelector('#multiRangeSlider-min-price')
            let maxPrice = document.querySelector('#multiRangeSlider-max-price')
        
        // min price
            var nativeInputValueSetterMinPrice = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
            nativeInputValueSetterMinPrice.call(minPrice, '0');
            var eventMinPrice = new Event('input', { bubbles: true});
            minPrice.dispatchEvent(eventMinPrice);
        
        // max price
            var nativeInputValueSetterMaxPrice = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
            nativeInputValueSetterMaxPrice.call(maxPrice, '250');
            var eventMaxPrice = new Event('input', { bubbles: true});
            maxPrice.dispatchEvent(eventMaxPrice);

        return {
            ...state,
            categoryFilters:{
                searchTerm:'',
                gender:[],
                brand:[],
                materials:[],
                color:[],
                price:{min:0, max:250},
              },
        }
    }


    if(action.type === SHOW_GRID_VIEW) {
        return {
            ...state,
            isGridViewActive:true,
            isListViewActive:false,
        }
    }

    if(action.type === SHOW_LIST_VIEW) {
        return {
            ...state,
            isGridViewActive:false,
            isListViewActive:true,
        }
    }

    
   


    throw new Error(`No Matching "${action.type}" - action type`)
}


export default filter_reducer
