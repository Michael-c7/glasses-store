import {
  ADD_PRODUCTS_TO_CART,
  UPDATE_CART_AMOUNT,
  REMOVE_CART_ITEM,
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

      // let itemsDontChange = state.productsInCart.filter((el) => el.product.id !== itemId)
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
    


    throw new Error(`No Matching "${action.type}" - action type`)

  }


  export default cart_reducer