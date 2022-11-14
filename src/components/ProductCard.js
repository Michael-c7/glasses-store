import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import StarRating from '../components/StarRating'



const ProductCard = ({product}) => {
    const { fields } = product
    /*the number that fields.price
    is multiplied by is an
    arbitrarily chosen number */
    let fakeOriginalPrice = Math.round(fields.price * 1.6)
    let isSaleWidgetShown = false

    return (
        <Wrapper>
            <Link to={`/singleProduct/${fields.productCode}`}>
                <div className={`productCard__image-container ${isSaleWidgetShown && 'sale-class'}`}>
                    <img className='productCard__image' src={fields.image[0].url}  title={fields.name} alt={fields.name}/>
                </div>
            </Link>
            <div className='productCard__info'>
                <h2 className='productCard__name'>{fields.name}</h2>
                <StarRating className='product-card__stars' rating={fields.rating}/>
                <p className='productCard__price'>${fields.price} {isSaleWidgetShown && <span className='original-price-text'>${fakeOriginalPrice}</span>} </p>
            </div>
        </Wrapper>
    )
}

export default ProductCard


const Wrapper = styled.div`
    --background-card-color:#F7F7F7;

    position:relative;
    text-align:center;

    .productCard__image-container {
        position:relative;
        // max-width:280px;
        height:325px;
        background:var(--background-card-color);
    }

    
    .productCard__image {
        width:100%;
        height:100%;
        object-fit:contain;
    }


    .productCard__info {
        padding:1rem 0;
    }


    .productCard__name {
        font-size:1.25rem;
        font-weight:500;
        text-transform:capitalize;
    }




    .productCard__price {
        font-size:1.25rem;
    }



    



    .sale-class::before {
        content:'SALE';
        position:absolute;
        width:0%;
        height:2px;
        color:var(--red);
        left:0%;
        top:0;
        margin:1rem;
        font-size:0.8rem;
        font-weight:400;
    }

    .sale-class::after {
        content:'';
        position:absolute;
        width:36px;
        height:23px;
        background:none;
        left:-2px;
        top:-4px;
        margin:1rem;
        font-size:0.8rem;
        border:1px solid var(--red);
        border-left:none;
        border-right:none;
    }


    .original-price-text {
        color:#B7B7B7;
        font-size:0.95rem;
        text-decoration:line-through;
    }

`