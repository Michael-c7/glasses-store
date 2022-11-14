import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ProductCards from './ProductCards'
import { useProductsContext } from '../contexts/products_context'


const ProductTabs = () => {
    const { products } = useProductsContext()
    const [productsTabsData, setProductsTabsData] = useState([])
    const [isProductsShownIndex, setIsProductsShownIndex] = useState(0)

    const amtOfCards = 8

    useEffect(() => {
        setProductsTabsData([
            {
                type:'Latest',
                products:products.slice(0, amtOfCards),
            },
            {
                type:'Best Reviewed',
                products:products.filter((item) => item.fields.rating >= 5),
            },
            {
                type:'Affordable',
                products:products.filter((item) => item.fields.price <= 30).slice(0, amtOfCards),
            },
        ])
    }, [products])

  return (
    <Wrapper>
        <div className='productTabs__inner-container'>
            <h2 className='productTabs__heading'>Top Products</h2>
            <ul className='productTabs__items'>
                {productsTabsData.map((el, index) =>  {
                    return (
                        <li className={`productTabs__item ${isProductsShownIndex === index && 'productTabs__item--active'}`} key={index}>
                            <button className='productTabs__item__btn' onClick={() => setIsProductsShownIndex(index)}>{el.type}</button>
                        </li>
                    )
                })}
            </ul>

            <div className='productTabs__products-container'>
                {productsTabsData.map((_, index) => {
                    let products = productsTabsData[index].products                    
                    return (
                        <div className={`ProductCards__container ${isProductsShownIndex === index ? 'ProductCards__container--shown' : 'ProductCards__container--hidden'}`} key={index}>
                            <ProductCards {...{products}}/>
                        </div>
                    )
                })}
            </div>
        </div>
    </Wrapper>
  )
}

export default ProductTabs


const Wrapper = styled.section`
    margin:7.5rem 0;
    position:relative;

    .productTabs__heading {
        text-align:center;
        font-size:2rem;
        font-weight:500;
    }

    .productTabs__items {
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        margin:1.5rem 0 2.5rem 0;
    }
    
    .productTabs__item {
        position:relative;
        margin:0 1.25rem;
        font-size:1rem;
        text-transform:uppercase;
        font-weight:500;
        transition:color 0.1s ease;
    }

    .productTabs__item--active:before {
        content:'';
        position:absolute;
        height:2px;
        background:var(--red);
        bottom:0;
        left:0;
        width:100%;
    }

    .productTabs__item__btn {
        border:none;
        background:none;
        font-size:1.15rem;
        font-weight:500;
        font-family: 'Josefin Sans',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    }

    .productTabs__item__btn:hover {
        cursor:pointer;
    }
    
    .productTabs__item:hover {
        color:var(--red);
        cursor:pointer;
    }
    
    .productTabs__item:after {
        content:'';
        position:absolute;
        width:0%;
        height:2px;
        background:var(--red);
        left:50%;
        bottom:0;
        transition:all 0.4s ease;
    }
    
    .productTabs__item:hover:after {
        left:0;
        width:100%;
    }

    .productTabs__products-container {
        position:relative;
        // --card-outer-width is in index.css
        max-width:var(--card-outer-width);
        margin:0 auto;
    }
    .ProductCards__container--shown {
        display:block;
    }

    .ProductCards__container--hidden {
        display:none;
    }





    @media (max-width:425px) {
        .productTabs__items {
            display:flex;
            flex-direction:column;
        }

        .productTabs__item {
            margin:0.5rem 0;
        }
    }
`