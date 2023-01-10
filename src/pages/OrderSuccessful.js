import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button1 } from '../styledComponents/Button1';
import { useCartContext } from '../contexts/cart_context';

const OrderSuccessful = () => {
    const { orderNumber } = useCartContext()

    return (
        <Wrapper>
            {orderNumber ? (
                <>
                    <h1 className='orderSuccessful__heading'>Thank you for your purchase!</h1>
                    <div className='orderSuccessful__info'>
                        <p className='orderSuccessful__text'>Your order number is #{orderNumber}</p>
                        <p className='orderSuccessful__text'>We'll email you an order confirmation with details and tracking info</p>
                        <Link to='/'>
                            <Button1>Continue Shopping</Button1>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <div className='orderSuccessful__info'>
                    <p className='orderSuccessful__text'>This page is for when an order is Successful</p>
                        <Link to='/'>
                            <Button1>Start Shopping</Button1>
                        </Link>
                    </div>
                </>
            )}

        </Wrapper>
    )
}

export default OrderSuccessful

const Wrapper = styled.section`
    height:50vh;
    text-align:center;

    .orderSuccessful__heading {
        text-transform:uppercase;
        margin:2rem 0;
        font-weight:500;
    }

    .orderSuccessful__info > * {
        margin:1.5rem 0;
    }

    .orderSuccessful__text {
        color:#555;
    }
`