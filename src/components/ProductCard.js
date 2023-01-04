import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import StarRating from '../components/StarRating'
import { Button1 } from '../styledComponents/Button1'
import { useFilterContext } from '../contexts/filter_context'
import { useCartContext } from '../contexts/cart_context'


const ProductCard = ({product}) => {
    const { 
        isGridViewActive,
        isListViewActive,
    } = useFilterContext()

    const {
        addProductToCart,
    } = useCartContext()
    


    const { fields } = product
    /*the number that fields.price
    is multiplied by is an
    arbitrarily chosen number */
    let fakeOriginalPrice = Math.round(fields.price * 1.6)
    let isSaleWidgetShown = false

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
                    <div className={`productCard__image-container ${isSaleWidgetShown && 'sale-class'}`}>
                        <img className='productCard__image' src={fields.image[0].url}  title={fields.name} alt={fields.name}/>
                    </div>
                </Link>
                <div className='productCard__info'>
                    <h2 className='productCard__name'>{fields.name}</h2>
                    <div className='center-transform'>
                        <StarRating className='productCard__stars' rating={fields?.rating} horizontalSpacing={`${horizontalSpacingState}`}/>
                    </div>
                    <p>{isListViewActive && `${fields.description.slice(0, maxCharDescAmt)}...`}</p>
                    <p className='productCard__price'>${fields.price} {isSaleWidgetShown && <span className='original-price-text'>${fakeOriginalPrice}</span>} </p>
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