import React, { useState } from "react";
import styled from "styled-components";
import { Button1 } from "../styledComponents/Button1";
import BreadCrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { useCartContext } from "../contexts/cart_context";
import { toCurrency } from "../utility/misc";
import { useNavigate } from "react-router-dom";
import FormInputContainer from "../components/FormInputContainer";

const Checkout = () => {
  const { 
    productsInCart,
    subTotal,
    totalProductsInCart,
    changeCartItemAmount,
    removeCartItem,
    shipping,
    removeAllProductsInCart,
    generateOrderNumber,
  } = useCartContext();

  const navigate = useNavigate();


  const [amountValues, setAmountValues] = useState([]); 

  const [shippingAddressInfo, setShippingAddressInfo] = useState({
    email:'',
    firstName:'',
    lastName:'',
    streetAddress:'',
    city:'',
    zipCode:'',
    country:'',
    region:'',
    company:'',
    phoneNumber:'',
  })
  const [paymentAddressInfo, setPaymentAddressInfo] = useState({
    email:'',
    firstName:'',
    lastName:'',
    streetAddress:'',
    city:'',
    zipCode:'',
    country:'',
    region:'',
    company:'',
    phoneNumber:'',
  })

  const [paymentType, setPaymentType] = useState('')
  const [orderComment, setOrderComment] = useState('')

  const [isBillingShippingAddressSame, setIsBillingShippingAddressSame] = useState(true)
  const [isPaymentReady, setIsPaymentReady] = useState(false)



  const shippingInputs = [
    {
      id:1,
      name:'shipping-email',
      type:'email',
      labelText:'Email Address',
      errorMessage:'Please enter a valid email address (Eg: johnsmith@example.com).',
      pattern:'^[^@]+@[^@]+\.[^@]+$',
      required:true,
    },
    {
      id:2,
      name:'shipping-firstName',
      type:'text',
      labelText:'First Name',
      errorMessage:'This is a required field.',
      required:true,
    },
    {
      id:3,
      name:'shipping-lastName',
      type:'text',
      labelText:'Last Name',
      errorMessage:'This is a required field.',
      required:true,
    },
    {
      id:4,
      name:'shipping-streetAddress',
      type:'text',
      labelText:'Street Address',
      errorMessage:'This is a required field.',
      required:true,
    },
    {
      id:5,
      name:'shipping-city',
      type:'text',
      labelText:'City',
    },
    {
      id:6,
      name:'shipping-zipCode',
      type:'text',
      labelText:'Zip/Postal Code',
    },
    {
      id:7,
      name:'shipping-country',
      labelText:'country',
      errorMessage:'This is a required field.',
      required:true,
      componentType:'countryDropdown',
      value:shippingAddressInfo.country,
      onChangeSetState:setShippingAddressInfo,
      onChangeState:shippingAddressInfo,

    },
    {
      id:8,
      name:'shipping-region',
      labelText:'State/Province',
      errorMessage:'This is a required field.',
      required:true,
      componentType:'regionDropdown',
      country:shippingAddressInfo.country,
      value:shippingAddressInfo.region,
      onChangeSetState:setShippingAddressInfo,
      onChangeState:shippingAddressInfo,
    },
    {
      id:9,
      name:'shipping-company',
      type:'text',
      labelText:'Company',
    },
    {
      id:10,
      name:'shipping-phoneNumber',
      type:'text',
      labelText:'Phone Number',
      errorMessage:'Please provide a valid phone number (E.g: +123456789012, 2987654567, +45687908543, 456-214-7986',
      pattern:'^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$',
      required:true,
    },
  ]

  const paymentInputs = [
    {
      id:1,
      name:'payment-email',
      type:'email',
      labelText:'Email Address',
      errorMessage:'Please enter a valid email address (Eg: johnsmith@example.com).',
      pattern:'^[^@]+@[^@]+\.[^@]+$',
      required:true,
    },
    {
      id:2,
      name:'payment-firstName',
      type:'text',
      labelText:'First Name',
      errorMessage:'This is a required field.',
      required:true,
    },
    {
      id:3,
      name:'payment-lastName',
      type:'text',
      labelText:'Last Name',
      errorMessage:'This is a required field.',
      required:true,
    },
    {
      id:4,
      name:'payment-streetAddress',
      type:'text',
      labelText:'Street Address',
      errorMessage:'This is a required field.',
      required:true,
    },
    {
      id:5,
      name:'payment-city',
      type:'text',
      labelText:'City',
    },
    {
      id:6,
      name:'payment-zipCode',
      type:'text',
      labelText:'Zip/Postal Code',
    },
    {
      id:7,
      name:'payment-country',
      labelText:'country',
      errorMessage:'This is a required field.',
      required:true,
      componentType:'countryDropdown',
      value:paymentAddressInfo.country,
      onChangeSetState:setPaymentAddressInfo,
      onChangeState:paymentAddressInfo,
    },
    {
      id:8,
      name:'payment-region',
      labelText:'State/Province',
      errorMessage:'This is a required field.',
      required:true,
      componentType:'regionDropdown',
      country:paymentAddressInfo.country,
      value:paymentAddressInfo.region,
      onChangeSetState:setPaymentAddressInfo,
      onChangeState:paymentAddressInfo,
    },
    {
      id:9,
      name:'payment-company',
      type:'text',
      labelText:'Company',
    },
    {
      id:10,
      name:'payment-phoneNumber',
      type:'text',
      labelText:'Phone Number',
      errorMessage:'Please provide a valid phone number (E.g: +123456789012, 2987654567, +45687908543, 456-214-7986',
      pattern:'^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$',
      required:true,
    },
]


  React.useEffect(() => {
    let data = productsInCart.map((el) => {
      return {id:el.product.id, amount:el.amount}
    })
  
    setAmountValues(data)
  }, [productsInCart])


  React.useEffect(() => {
    /* 
    This code enabled or disables
    the place order button by
    checking if all required input fields
    have an input in them
    */
    let baseNum = 0
    let requiredInputs = Array.from(document.querySelectorAll('.info-input__label--required'))
    let requiredNumAmt = requiredInputs.length



    requiredInputs.forEach((el) => {
      let container = el.parentNode
      let input = container.querySelector('input') || container.querySelector('select')
      let inputLength = input.value.length 


      if(inputLength > 0) {
        baseNum++
      } else {
        baseNum--        
      }

      setIsPaymentReady(baseNum === requiredNumAmt ? true : false)
    })
  }, [shippingAddressInfo, paymentAddressInfo, isBillingShippingAddressSame])

  



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



  const onSubmit = (e) => {
    e.preventDefault()
    let dataToSubmit = []

    if(isBillingShippingAddressSame) {
      dataToSubmit = {
        shippingAddressInfo,
        paymentAddressInfo:shippingAddressInfo,
        paymentType,
        orderComment,
        productsInCart,
      }
    } else {
      dataToSubmit = {
        shippingAddressInfo,
        paymentAddressInfo,
        paymentType,
        orderComment,
        productsInCart,
      }
    }

    /*if there was a server you would submit this data*/
    // dataToSubmit
    
    // reset the cart
    removeAllProductsInCart()
    
    // generate order number
    generateOrderNumber() 

    // link to success page
    navigate('/orderSuccessful')
  }

  return (
    <Wrapper>
      <BreadCrumb />
      {productsInCart.length > 0 ? (
        <div className="checkout__container">
          <form className="checkout__inner-container" onSubmit={(e) => onSubmit(e)}>
            <div className="col-1">
              <div className="checkout__info">
                <h2 className="checkout__heading">Shipping Address</h2>
                <hr className="checkout__hr" />
                
                <div onChange={(e) => {
                  let name = e.target.name.split('-')[1]
                  let value = e.target.value
                  setShippingAddressInfo({...shippingAddressInfo,[name]:value})
                }}>

                {shippingInputs.map((el, index) => {
                  return (
                    <FormInputContainer {...el} key={el.id}/>
                  )
                })}
                </div>
              </div>
            </div>
            <div className="col-2">
              {/*have the payment options be here */}
              <div className="checkout__info">
                <h2 className="checkout__heading">Payment Methods</h2>
                <hr className="checkout__hr" />

                <div className='payment-info-container'>
                  <input className='payment-type-input payment-type-input--checkbox' type='checkbox' id='show-payment-info' name='show-payment-info' onChange={(e) => setIsBillingShippingAddressSame(e.target.checked)} checked={isBillingShippingAddressSame}/>
                  <label className='info-input__label' htmlFor='show-payment-info'>My billing and shipping addresses are the same</label>
                </div>

              {!isBillingShippingAddressSame ? (
                <div  onChange={(e) => {
                  let name = e.target.name.split('-')[1]
                  let value = e.target.value
                  setPaymentAddressInfo({...paymentAddressInfo,[name]:value})
                }}>

                {paymentInputs.map((el, index) => {
                  return (
                    <FormInputContainer {...el} key={el.id}/>
                  )
                })}
              </div>
              ) : ''}


                <div onChange={(e) => setPaymentType(e.target.value)}>
                  <div className="payment-type-container">
                    <input className='payment-type-input payment-type-input--radio' type='radio' id='checkOrMoneyOrder' name='payment-type' value='checkOrMoneyOrder' defaultChecked={true}/>
                    <label className='info-input__label' htmlFor='checkOrMoneyOrder'>Check / Money order</label>
                    <hr className="checkout__hr" />
                  </div>
                  <div>
                    <input className='payment-type-input payment-type-input--radio' type='radio' id='bankTransferPayment' name='payment-type' value='bankTransferPayment'/>
                    <label className='info-input__label' htmlFor='bankTransferPayment'>Bank transfer Payment</label>
                    <hr className="checkout__hr" />
                  </div>
                  <div>
                    <input className='payment-type-input payment-type-input--radio' type='radio' id='cashOnDelivery' name='payment-type' value='cashOnDelivery'/>
                    <label className='info-input__label' htmlFor='cashOnDelivery'>Cash on Delivery</label>
                    <hr className="checkout__hr" />
                  </div>
                </div>

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
                            <p className="summary-item__price">{toCurrency(product.fields.price, 'USD', 'en-us')}</p>
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
                    <p>{toCurrency(subTotal, 'USD', 'en-us')}</p>
                  </div>
                  <div className="checkout__summary__item">
                    <p>Flat Shipping Rate:</p>
                    <p>{toCurrency(shipping, 'USD', 'en-us')}</p>
                  </div>
                  <div className="checkout__summary__item checkout__summary__item-total">
                    <p>Total:</p>
                    <p>{toCurrency(subTotal + shipping, 'USD', 'en-us')}</p>
                  </div>
                </div>

                <div className="info-input-container">
                  <label className="info-input__label" htmlFor="order-comment">
                    Order Comment
                  </label>
                  <textarea
                    className="info-input__input"
                    name="order-comment"
                    onChange={((e) => setOrderComment(e.target.value))}
                    value={orderComment}
                  ></textarea>
                </div>
                <Button1 className="checkout__order-btn" type='submit' disabled={!isPaymentReady}>
                  Place Order
                </Button1>
              </div>
            </div>
          </form>
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
    font-family:var(--base-font-stack);
  }

  .checkout__container {
    margin:2rem var(--site-outer-margin);
  }

  .checkout__inner-container {
    margin:0 auto;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-gap:2rem;
  }

  @media screen and (max-width: 768px) {
    .checkout__inner-container {
      display:flex;
      flex-direction:column;
    }
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
    width:100%;
  }

  .info-input__input--error {
    border:1px solid red;
  }

  select.info-input__input {
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

  .payment-type-container {
    margin-top:2rem;
  }


  .payment-type-input {
    margin-right:0.5rem;
    position:relative;
  }

  .payment-type-input--checkbox {
    top:-2px;
  }

  .payment-type-input--radio {
    top:1px;
  }
  
  .payment-type-input:hover {
    cursor:pointer;
  }

  .payment-info-container {
    display:flex;
    align-items:stretch;
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
    margin-bottom:0.1rem;
  }

  .summary-item__header {
    font-size:1.15rem;
    font-weight:300;
    text-transform:capitalize;
  }

  .summary-item__price {
    font-size:1.05rem;
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

`
