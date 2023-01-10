import {
  ADD_PRODUCTS_TO_CART,
  UPDATE_CART_AMOUNT,
  REMOVE_CART_ITEM,
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_PRODUCTS_IN_CART,
  REMOVE_ALL_PRODUCTS_IN_CART,
  GENERATE_ORDER_NUMBER
  } from '../actions'


  const cart_reducer = (state, action) => {

    if(action.type === ADD_PRODUCTS_TO_CART) {
        let productJustAdded = action.payload
        let cartProducts = state.productsInCart

        let list = [...cartProducts, productJustAdded]

        const group = {}

        list.forEach(e => {    
          const o = group[e.product.id] = group[e.product.id] || {...e, amount: 0}
          o.amount += e.amount
       })
       
       const res = Object.values(group)

       return {...state, productsInCart:res}
    }

    if(action.type === UPDATE_CART_AMOUNT) {
      let itemId = action.payload.itemId
      let itemAmount = action.payload.itemAmount

      let itemProduct = state.productsInCart.filter((el) => el.product.id === itemId)[0].product
      let itemIndex = state.productsInCart.map((el) => el.product.id).indexOf(itemId);

      let res = state.productsInCart.map((el, index) => {
        if(index === itemIndex) {
          return {product:itemProduct, amount:itemAmount}
        } else {
          return el
        }
      })
      
      return {...state, productsInCart:res}
    }

    if(action.type === REMOVE_CART_ITEM) {
      let itemId = action.payload
      let itemsDontRemove = state.productsInCart.filter((el) => el.product.id !== itemId)    
      
      return {...state, productsInCart:itemsDontRemove}
    }


    if(action.type === CALCULATE_SUBTOTAL) {
      let nums = state.productsInCart.map((el) => el.amount * el.product.fields.price)
      let subTotal = nums.reduce((total, curr) => total + curr, 0)
      return {...state, subTotal}
    }

    if(action.type === CALCULATE_TOTAL_PRODUCTS_IN_CART) {
      let res = state.productsInCart.reduce((total,curr) => total + curr.amount,0)
      return {...state, totalProductsInCart:res}
    }

    if(action.type === REMOVE_ALL_PRODUCTS_IN_CART) {
      return {
        ...state, productsInCart:[],
      }
    }

    if(action.type === GENERATE_ORDER_NUMBER) {
      let orderNumber = Math.round(Math.random() * 100000)

      return {...state, orderNumber:orderNumber}
    }
    

    throw new Error(`No Matching "${action.type}" - action type`)

  }


  export default cart_reducer