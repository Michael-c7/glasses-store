import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import BreadCrumb from '../components/Breadcrumb'
import { Button1 } from '../styledComponents/Button1'
import StarRating from '../components/StarRating'

import PlaceholderImage from '../assets/singleProductImagePlaceholders/sincerely-media-d05w6_7FaPM-unsplash.jpg'

import { useCartContext } from '../contexts/cart_context'
import { BsArrowRepeat, BsFillXCircleFill } from 'react-icons/bs'

const Cart = () => {
  const { 
    productsInCart,
    changeCartItemAmount,
    removeCartItem,
   } = useCartContext()


  let [totalWidth, setTotalWidth] = React.useState(window.innerWidth)


  const getWidth = _ => setTotalWidth(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener("resize", getWidth);
    return () => window.removeEventListener('resize',getWidth)
  })


  useEffect(() => {
    let nonEssentialBreakpoint = 768
    let essentialInfoEl = Array.from(document.querySelectorAll('.cart__non-essential-info'))
    
    if(totalWidth <= nonEssentialBreakpoint) {
      essentialInfoEl.forEach((el) => el.style.display = 'none')
    } else {
      essentialInfoEl.forEach((el) => el.style.display = 'table-cell')
    }
  },[totalWidth])


 // store the local amt values, id for identification amt for amt, array of objs
  // const [amountValues, setAmountValues] = React.useState([{id:'abc123', amount:2}]);
  const [amountValues, setAmountValues] = React.useState([]);

  /*
  set values w/ amt, id 
*/


useEffect(() => {
  let data = productsInCart.map((el) => {
    return {id:el.product.id, amount:el.amount}
  })

  setAmountValues(data)
}, [productsInCart])



  const handleChange = (id,amount) => {
    // let onlyNumberGreaterThanZeroRegex = /^([1-9][0-9]+|[1-9])$/
    let onlyNumbersRegex = /\d+/g
    let cleanAmount = Number(amount.split('').filter(el => el.search(onlyNumbersRegex) === 0).join(''))


    let itemsDontChange = amountValues.filter((el) => el.id !== id)
    setAmountValues([...itemsDontChange, {id, amount:cleanAmount}])
  }



  const clickHandle = (id) => {
    // 1. get the correct amount from the local state (amountValues) using the id 
    let currentAmt = getVal(id)
    
    if(currentAmt === 0) {
      currentAmt = 1
    }

    // 2. send the amount to the cart state to change in the reducer
    changeCartItemAmount(id, currentAmt)
  }

  let getVal = (id) => {
    return amountValues.filter((el) => el.id === id)[0]?.amount
  }


  /*
  doing now
  https://stackoverflow.com/questions/69690181/reactjs-warning-a-component-is-changing-an-uncontrolled-input-to-be-controll
  */


  return (
    <Wrapper>
      <BreadCrumb/>
      {productsInCart.length > 0 ? (
      <div className='cart__container'>
                 <div className='cart__order-container'>
                 <table className='cart__order__table'>
                   <thead>
                     <tr>
                       <th>Image</th>
                       <th>Product Name</th>
                       <th>Quantity</th>
                       <th className='cart__non-essential-info'>Description</th>
                       <th className='cart__non-essential-info'>Rating</th>
                       <th className='cart__non-essential-info'>Brand</th>
                       <th>Unit Price</th>
                       <th>Total</th>
                     </tr>
                   </thead>
                   <tbody>
                   {productsInCart.map((el, index)  => {
                     const { product, amount } = el
                     const productImg = product.fields.image[0].url
                     let descCharMax = 60
                     
       
                     return (
                       <tr key={product.id}>
                         <td><img className='cart__order-img' src={productImg} title={`${product.fields.name}`} alt={`${product.fields.name}`}/></td>
                         <td><Link to={`/singleProduct/${product.fields.productCode}`}>{product.fields.name}</Link></td>
                         <td>
                           <div className='cart__quantity-container'>
                             <input className='cart__quantity-input' type='text' onChange={(e) => handleChange(product.id, e.target.value)} value={getVal(product.id) || 0}/>
                             <button className='cart__update-quantity-amt' onClick={() => clickHandle(product.id)}><BsArrowRepeat/></button>
                             <button className='cart__update-remove-item' onClick={() => removeCartItem(product.id)}><BsFillXCircleFill/></button>
                           </div>
                         </td>
                         <td className='cart__non-essential-info'><p className='cart__order-description'>{product.fields.description.slice(0, descCharMax)}...</p></td>
                         <td className='cart__non-essential-info'><StarRating rating={product.fields.rating}/></td>
                         <td className='cart__non-essential-info'>{product.fields.brand}</td>
                         <td>${product.fields.price}</td>
                         <td>${product.fields.price * amount}</td>
                       </tr>
                     )
                   })}
                   </tbody>
                 </table>
               </div>
        

          <div className='cart__summary-container'>
            <table>
              <tbody>
                <tr>
                  <th>Sub Total:</th>
                  <td>$200</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th>Flat Shipping Rate:	</th>
                  <td>$5</td>
                </tr> 
              </tbody>
              <tbody>
                <tr>
                  <th>Total:</th>
                  <td className='cart__total-amt-num'>$205</td>
                </tr>
              </tbody>
            </table>
          </div>
        
        
        <div className='cart__btns'>
          <Link to='/products'>
            <Button1>Continue Shopping</Button1>
          </Link>

          <Link to='/checkout'>
            <Button1>Checkout</Button1>
          </Link>
        </div>
      </div> ) : (
          <div className='cart__empty-cart-container'>
            <h2>Your shopping cart is empty</h2>
            <Link to='/products'>
              <Button1>Start Shopping</Button1>
            </Link>
          </div>
        )}
    </Wrapper>
  )
}

export default Cart


const Wrapper = styled.section`
  .cart__container {
    margin:2rem var(--site-outer-margin);
  }


  .cart__order-img {
    width:150px;
  }

  .cart__order-container {
    margin:2rem 0;
    overflow-x:auto;
  }

  .cart__order__table {
    width:100%;
  }

  .cart__summary-container {
    position:relative;
    margin:2rem 0;
    display:flex;
    justify-content:flex-end;
    overflow-x:auto;
  }

  table, th, td {
    border: 1px solid #ccc;
    border-collapse: collapse;
    padding:0.5rem 1rem;
  }

  .cart__summary-container table, .cart__summary-container th, .cart__summary-container td {
    border: 1px solid #ccc;
    border-collapse: collapse;
    padding:0.5rem 2.5rem;
  }

  td {
    text-align:center;
  }


  .cart__quantity-container {
    position:relative;
    display:flex;
    justify-content:center;
  }

  .cart__quantity-input {
    width:50px;
    font-size:1rem;
    text-align:center;
    border-radius:0px;
    border:1px solid #ccc;
    border-right:none;
  }

  .cart__quantity-input:focus {
    outline:1px solid #000;
  }

  .cart__update-quantity-amt {
    border:none;
    background:#000;
    color:#fff;
    font-size:1.2rem;
    padding:0.75rem 1.15rem;
    transition:0.250ms ease;
  }

  .cart__update-quantity-amt:hover {
    background:var(--red);
    cursor:pointer;
  }

  .cart__update-remove-item {
    border:none;
    background:#DA4F49;
    color:#fff;
    font-size:1rem;
    padding:0.75rem 1.15rem;
  }

  .cart__update-remove-item:hover {
    background:var(--red);
    cursor:pointer;
  }

  .cart__total-amt-num {
    color:var(--red);
  }


  .cart__order-description {
    max-width:25ch;
    margin:0 auto;
  }



  .cart__empty-cart-container {
    margin:2rem 0;
    height:75vh;
    text-align:center;
  }

  .cart__empty-cart-container > h2 {
    margin:1rem 0;
    font-weight:500;
  }



  .cart__btns {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin:2rem 0;
  }




  .cart__summary-container {
    position:relative;
    margin:2rem 0;
    display:flex;
    justify-content:flex-end;
    overflow-x:auto;
  }


  @media screen and (max-width: 425px) {
    .cart__summary-container {
      justify-content:center;
      width:100%;
    }
  }

  @media screen and (max-width: 375px) {
    .cart__btns {
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      margin:2rem 0;
    }

    .cart__btns > * {
      margin:0.75rem 0;
    }
  }


`