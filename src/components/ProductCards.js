import React from 'react'
import styled from 'styled-components'
import ProductCard from '../components/ProductCard'


const ProductCards = ({products}) => {
    return (
        <Wrapper>
            {products.map((product, index) => {
                return (
                    <ProductCard {...{product}} key={index} />
                )
            })}
        </Wrapper>
    )
}

export default ProductCards


const Wrapper = styled.ul`
    width:100%;
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    gap:1rem 2rem;

    @media (max-width: 1024px) {
        grid-template-columns:repeat(3, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns:repeat(2, 1fr);
    }

    @media (max-width: 425px) {
        grid-template-columns:repeat(1, 1fr);
    }
`