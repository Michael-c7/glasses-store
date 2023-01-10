import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import StarRating from '../components/StarRating'
import { Button1 } from '../styledComponents/Button1'
import { useFilterContext } from '../contexts/filter_context'
import { useCartContext } from '../contexts/cart_context'

import {toCurrency} from '../utility/misc'

const ProductCard = ({product}) => {
    const { 
        isGridViewActive,
        isListViewActive,
    } = useFilterContext()

    const {
        addProductToCart,
    } = useCartContext()

    const { fields } = product

    let maxCharDescAmt = 200

    const [pageWidth, setPageWidth] = React.useState(window.innerWidth);
    let [horizontalSpacingState, setHorizontalSpacingState] = React.useState('center')


    const updateWidth = () => setPageWidth(window.innerWidth);

    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });


    React.useEffect(() => {
        let mediaQueryBreakpoint = 500
        if(isListViewActive && pageWidth <= mediaQueryBreakpoint) {
            setHorizontalSpacingState('center')
        } else if(isListViewActive && pageWidth > mediaQueryBreakpoint) {
            setHorizontalSpacingState('start')
        }

        if(isGridViewActive) {
            setHorizontalSpacingState('center')
        }
        
    },[pageWidth, isGridViewActive, isListViewActive])

    



    
    return (
        <Wrapper>
            <div className={`productCard ${isGridViewActive && 'productCard--gridView'} ${isListViewActive && 'productCard--listView'}`}>
                <Link to={`/singleProduct/${fields.productCode}`}>
                    <div className={`productCard__image-container`}>
                        <img className='productCard__image' src={fields.image[0].url}  title={fields.name} alt={fields.name}/>
                    </div>
                </Link>
                <div className='productCard__info'>
                    <h2 className='productCard__name'>{fields.name}</h2>
                    <div className='center-transform'>
                        <StarRating className='productCard__stars' rating={fields?.rating} horizontalSpacing={`${horizontalSpacingState}`}/>
                    </div>
                    <p>{isListViewActive && `${fields.description.slice(0, maxCharDescAmt)}...`}</p>
                    <p className='productCard__price'>{toCurrency(fields.price, 'USD', 'en-us')}</p>
                    {/*add to cart button*/}
                    <Button1 onClick={() => addProductToCart(product)} className='productCard__add-to-cart-btn' style={{fontSize:'0.75rem', margin:'0.5rem 0'}}>Add to Cart</Button1>
                </div>
            </div>
        </Wrapper>

    )
}

export default ProductCard


const Wrapper = styled.div`
    --background-card-color:#F7F7F7;

    .productCard {
        position:relative;
    }

    .productCard__image-container {
        position:relative;
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

    .original-price-text {
        color:#B7B7B7;
        font-size:0.95rem;
        text-decoration:line-through;
    }

    .productCard--gridView {
        display:flex;
        flex-direction:column;
        text-align:center;
    }

    .productCard--listView {
       display:grid;
        grid-template-columns:minmax(100px,250px) 1fr;
        gap:2rem;
        text-align:start;
    }


    @media (max-width: 500px) {
        .productCard--listView {
            grid-template-columns: auto;
            gap:5rem;
            text-align:center;
            grid-template-rows:minmax(100px,250px) 1fr;
        }
      }

    .productCard--listView .productCard__info > * {
        margin-bottom:0.35rem;
    }

    .productCard--listView .productCard__info .productCard__add-to-cart-btn {
        margin-bottom:0;
    }

`