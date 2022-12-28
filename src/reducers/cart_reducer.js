import {
  ADD_PRODUCTS_TO_CART,
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
    


    throw new Error(`No Matching "${action.type}" - action type`)

  }


  export default cart_reducer