import React, { useState } from "react";
import styled from "styled-components";

import { Button1 } from "../styledComponents/Button1";
import BreadCrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

import testImg from "../assets/singleProductImagePlaceholders/oli-woodman-s7gRHGEmX78-unsplash.jpg";

import { useCartContext } from "../contexts/cart_context";

import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


const Checkout = () => {
  /*the is variable is just for testing so i dont
  have to get item in cart every time,
  the real code to use -->  productsInCart.length > 0
  */
  let tempCheck = 1;
  // productsInCart.length > 0

  const { 
    productsInCart,
    subTotal,
    totalProductsInCart,
    changeCartItemAmount,
    removeCartItem,
  } = useCartContext();


  const [amountValues, setAmountValues] = useState([]);
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');


  React.useEffect(() => {
    let data = productsInCart.map((el) => {
      return {id:el.product.id, amount:el.amount}
    })
  
    setAmountValues(data)
  
  }, [productsInCart])



  const handleChange = (id,amount) => {
    let onlyNumbersRegex = /\d+/g
    let cleanAmount = Number(amount.split('').filter(el => el.search(onlyNumbersRegex) === 0).join(''))


    let itemsDontChange = amountValues.filter((el) => el.id !== id)
    setAmountValues([...itemsDontChange, {id, amount:cleanAmount}])

    if(cleanAmount === 0) {
      cleanAmount = 1
    }

    changeCartItemAmount(id, cleanAmount)
  }


  let getVal = (id) => {
    return amountValues.filter((el) => el.id === id)[0]?.amount
  }

  const increaseCartAmt = (id) => {
    // 1. get the correct amount from the local state (amountValues) using the id 
    let currentAmt = getVal(id)

    // 2. send the amount to the cart state to change in the reducer
    changeCartItemAmount(id, currentAmt + 1)
  }
  

  const decreaseCartAmt = (id) => {
    // 1. get the correct amount from the local state (amountValues) using the id 
    let currentAmt = getVal(id)
    
    // 2. send the amount to the cart state to change in the reducer
    if(currentAmt <= 1) {
      removeCartItem(id)
    } else {
      changeCartItemAmount(id, currentAmt - 1)
    }
  }



  return (
    <Wrapper>
      <BreadCrumb />

      {tempCheck > 0 ? (
        <div className="checkout__container">
          <div className="checkout__inner-container">
            <div className="col-1">
              <div className="checkout__info">
                <h2 className="checkout__heading">Shipping Address</h2>
                <hr className="checkout__hr" />
                <div className="info-input-container">
                  <label className="info-input__label info-input__label--required" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="info-input__input"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="info-input-container">
                  <label className="info-input__label info-input__label--required" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="info-input__input"
                    type="text"
                    name="firstName"
                    id="firstName"
                  />
                </div>
                <div className="info-input-container">
                  <label className="info-input__label info-input__label--required" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="info-input__input"
                    type="text"
                    name="lastName"
                    id="lastName"
                  />
                </div>
                <div className="info-input-container">
                  <label className="info-input__label info-input__label--required" htmlFor="streetAddress">
                    Street Address
                  </label>
                  <input
                    className="info-input__input"
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                  />
                </div>
                <div className="info-input-container">
                  <label className="info-input__label info-input__label--required" htmlFor="city">
                    City
                  </label>
                  <input
                    className="info-input__input"
                    type="text"
                    name="city"
                    id="city"
                  />
                </div>
                <div className="info-input-container">
                  <label className="info-input__label info-input__label--required" htmlFor="zipCode">
                    Zip/Postal Code
                  </label>
                  <input
                    className="info-input__input"
                    type="text"
                    name="zipCode"
                    id="zipCode"
                  />
                </div>

                <div className="info-input-container">
                  <label className="info-input__label info-input__label--required" htmlFor="country">
                  Country
                  </label>
                  <CountryDropdown 
                    className="info-input__input"
                    value={country}
                    onChange={(val) => setCountry(val)}
                  />
                </div>

                <div className="info-input-container">
                  <label className="info-input__label info-input__label--required" htmlFor="state/Province">
                  State/Province
                  </label>
                  <RegionDropdown
                    className="info-input__input"
                    country={country}
                    value={region}
                    onChange={(val) => setRegion(val)}
                  />
                </div>

                <div className="info-input-container">
                  <label className="info-input__label" htmlFor="company">
                    Company
                  </label>
                  <input
                    className="info-input__input"
                    type="text"
                    name="company"
                    id="company"
                  />
                </div>
                <div className="info-input-container">
                  <label className="info-input__label info-input__label--required" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <input
                    className="info-input__input"
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                  />
                </div>
              </div>
            </div>
            <div className="col-2">
              {/*have the payment options be here */}
              <div className="checkout__info">
                <h2 className="checkout__heading">Payment Methods</h2>
                <hr className="checkout__hr" />

              </div>
            </div>
            <div className="col-3">
              <div className="checkout__info">
                <h2 className="checkout__heading">Order Summary</h2>
                <hr className="checkout__hr" />
                <h3 className="checkout__heading">
                  {totalProductsInCart}{" "}
                  {totalProductsInCart === 1 ? "Item" : "Items"} In Cart
                </h3>
                <hr className="checkout__hr" />

                {/*have the order items here */}
                <div className="checkout__summary-items-container">
                  <ul className={`checkout__summary-items  ${productsInCart.length >= 2 ? 'checkout__summary-items--right-padding' : ''}`}>
                    {/* <li className="checkout__summary-item">
                      <img
                        className="summary-item__img"
                        src={testImg}
                        title="item name here"
                        alt="item name here"
                      />
                      <div className="summary__content-container">
                        <heading className="summary-item__heading">
                          <h2 className="summary-item__header">product name</h2>
                          <p className="summary-item__price">$22</p>
                        </heading>
                        <div className="summary__info-container">
                          <label className="info-input__label summary__info__label">
                            Qty:{" "}
                          </label>
                          <input className="info-input__input summary__info__input" />
                          <div className="summary__info-btns">
                            <button className="summary__info-btn">
                              <RiArrowUpSLine />
                            </button>
                            <button className="summary__info-btn">
                              <RiArrowDownSLine />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li> */}


                    {productsInCart.map((el => {
                      const { product, amount } = el
                      const productImg = product.fields.image[0].url
                      return (
                        <li className="checkout__summary-item" key={product.id}>
                        <img
                          className="summary-item__img"
                          src={productImg}
                          title={`${product.fields.name}`}
                          alt={`${product.fields.name}`}
                        />
                        <div className="summary__content-container">
                          <header className="summary-item__heading">
                            <h2 className="summary-item__header">{product.fields.name}</h2>
                            <p className="summary-item__price">${product.fields.price}</p>
                          </header>
                          <div className="summary__info-container">
                            <label className="info-input__label summary__info__label">
                              Qty:{" "}
                            </label>
                            <input className="info-input__input summary__info__input" onChange={(e) => handleChange(product.id, e.target.value)} value={getVal(product.id) || 0}/>
                            <div className="summary__info-btns">
                              <button className="summary__info-btn" onClick={() => increaseCartAmt(product.id)}>
                                <RiArrowUpSLine />
                              </button>
                              <button className="summary__info-btn" onClick={() => decreaseCartAmt(product.id)}>
                                <RiArrowDownSLine />
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                      )
                    }))}
                  </ul>
                </div>

                <hr className="checkout__hr" />
                <div className="checkout__summary-container">
                  <div className="checkout__summary__item">
                    <p>Sub Total:</p>
                    <p>${subTotal}</p>
                  </div>
                  <div className="checkout__summary__item">
                    <p>Flat Shipping Rate:</p>
                    <p>${5}</p>
                  </div>
                  <div className="checkout__summary__item checkout__summary__item-total">
                    <p>Total:</p>
                    <p>${subTotal + 5}</p>
                  </div>
                </div>

                <div className="info-input-container">
                  <label className="info-input__label" htmlFor="order-comment">
                    Order Comment
                  </label>
                  <textarea
                    className="info-input__input"
                    name="order-comment"
                  ></textarea>
                </div>
                <Button1 className="checkout__order-btn" disabled>
                  Place Order
                </Button1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="checkout__empty-cart-container">
          <h2>Your shopping cart is empty</h2>
          <Link to="/products">
            <Button1>Start Shopping</Button1>
          </Link>
        </div>
      )}
    </Wrapper>
  );
};

export default Checkout;

const Wrapper = styled.section`
  textarea {
    resize: vertical; /* user can resize vertically, but width is fixed */
  }


  .checkout__container {
    margin:2rem var(--site-outer-margin);
  }

  .checkout__inner-container {
    display:flex;
    grid-gap:1rem;
    margin:0 auto;
    // background:red;
    justify-content:center;
  }

  .col-1,  .col-3 {
    min-width:350px;
  }


  .checkout__info {
    border:1px solid #e6e6e6;
    padding:1rem;
  }


  .checkout__heading {
    font-weight:300;
    font-size:1.15rem;
  }

  .checkout__hr {
    border:none;
    border-top:1px solid #efefef;
    margin:0.5rem 0 1rem 0;
  }

  .info-input-container {
    position:relative;
    display:flex;
    flex-direction:column;
    margin:0.75rem 0;
  }


  .info-input__label {
    font-weight:300;
    margin:0.5rem 0;
  }

  .info-input__label--required {
    position:relative;
  }

  .info-input__label--required::after {
    content:'*';
    position:absolute;
    color:red;
    font-size:1.25rem;
    margin-left:0.5rem;
    top:3px;
  }

  .info-input__input {
    padding:0.35rem;
    font-size:1.1rem;
    line-height:25px;
    border 1px solid #ddd;
    font-weight:400;
    color:#555;
  }

  select.info-input__input  {
    padding:0.7rem;
  }


  .checkout__summary-items-container {
    height:250px;
    overflow:auto;
  }

  .checkout__summary-items--right-padding {
    padding-right:0.75rem;
  }

  .checkout__summary-item {
    position:relative;
    display:grid;
    grid-template-columns:auto 1fr;
    width:100%;
    padding:1rem 0 3rem 0;
  }

  .checkout__summary-item::after {
    content:'';
    position:absolute;
    background:#efefef;
    width:100%;
    height:1px;
    bottom:0;
  }


  .summary-item__img {
    width:75px;
    height:95px;
    object-fit:cover;
  }

  .summary__content-container {
    margin-left:0.75rem;
  }
  

  .checkout__summary__item {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin:0.5rem 0;
    font-weight:300;
  }


  .summary-item__heading {
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

  .summary-item__header {
    font-size:1.15rem;
    font-weight:300;
    text-transform:capitalize;
  }

  .summary-item__price {
    font-size:1.15rem;
    font-weight:300;
  }

  .summary__info-container {
    display:flex;
    align-items:center;
  }

  .summary__info__label {
    font-weight:300;
    color:gray;
    margin-right:0.25rem;
  }

  .summary__info__input {
    width:50px;
    line-height:initial;
    font-size:1rem;
    padding:0.3rem;
    margin:0rem 0.5rem 0rem 0;
    text-align:center;
    font-size:1.15rem;

  }

  .summary__info-btns {
    display:flex;
    flex-direction:column;
  }

  .summary__info-btn {
    border:none;
    background:none;
    color:grey;
    // font-size:1.15rem;
    font-size:1rem;
    transition:0.25s ease;
  }

  .summary__info-btn:hover {
    color:#000;
    cursor:pointer;
  }

  .checkout__summary__item-total {
    font-weight:400;
  }




  .checkout__order-btn {
    width:100%;
    margin:0.5rem 0 0rem 0;
  }

  .checkout__order-btn[disabled] {
    opacity:0.75;
  }

  .checkout__order-btn[disabled]:hover {
    cursor:default;
    background:var(--black);
  }


  .checkout__empty-cart-container {
    margin:2rem 0;
    height:75vh;
    text-align:center;
  }

  .checkout__empty-cart-container > h2 {
    margin:1rem 0;
    font-weight:500;
  }

`;
