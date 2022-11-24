import {
    MOBILE_FILTER_MENU_OPEN,
    MOBILE_FILTER_MENU_CLOSE,
  } from '../actions'


const filter_reducer = (state, action) => {


    if(action.type === MOBILE_FILTER_MENU_OPEN) {
        return {...state, isMobileFilterOpen:true}
    }

    if(action.type === MOBILE_FILTER_MENU_CLOSE) {
        return {...state, isMobileFilterOpen:false}
    }



    throw new Error(`No Matching "${action.type}" - action type`)
}


export default filter_reducer
