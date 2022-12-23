import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import BreadCrumb from '../components/Breadcrumb'
import { GrUpdate, GrFormClose } from 'react-icons/gr'
import { Button1 } from '../styledComponents/Button1'
import StarRating from '../components/StarRating'

import PlaceholderImage from '../assets/singleProductImagePlaceholders/sincerely-media-d05w6_7FaPM-unsplash.jpg'

/*
 use this for styling tables
https://www.w3schools.com/html/html_tables.asp
*/

import { BsArrowRepeat, BsFillXCircleFill } from 'react-icons/bs'

const Cart = () => {
  let mediaBreakpoint = 768


  const calculateSubTotal = () => {
    /*
    1. unit price of each item * them quantity(eg: item costs $20, have 4 of them 4 * 20)
    2. do this for all items
    3. add the cost of all items up,this the sub-total
    4. add flat shipping rate ($5) to sub total, this is the total
    */
  }


  // now only thing to do is hide all cart__non-essential-item when it reach 875px

  return (
    <Wrapper>
      <BreadCrumb/>
      <div className='cart__container'>
        <div className='cart__order-container'>
          <table className='cart__order__table'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th className='cart__non-essential-item'>Description</th>
                <th className='cart__non-essential-item'>Rating</th>
                <th className='cart__non-essential-item'>Brand</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img className='cart__order-img' src={PlaceholderImage} title={`example title`} alt='img 1'/></td>
                <td><Link to='/singleProducts/1234'>example name</Link></td>
                <td>
                  <div className='cart__quantity-container'>
                    <input className='cart__quantity-input' type='text'/>
                    <button className='cart__update-quantity-amt'><BsArrowRepeat/></button>
                    <button className='cart__update-remove-item'><BsFillXCircleFill/></button>
                  </div>
                </td>
                <td className='cart__non-essential-item'><p className='cart__order-description'>lorem ipsum ect lorem ipsum ect...</p></td>
                <td className='cart__non-essential-item'><StarRating rating={3}/></td>
                <td className='cart__non-essential-item'>ray-bans</td>
                <td>$200</td>
                <td>$800</td>
              </tr>
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
          <Button1>
            <Link to='/'>Continue Shopping</Link>
            </Button1>
          <Button1>
            <Link to='/checkout'>Checkout</Link>
          </Button1>
        </div>
      </div>
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