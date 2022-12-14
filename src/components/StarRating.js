import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'


const StarRating = (props) => {
    return (
        <Wrapper>
        {Array.from({ length: 5 }, (v, i) => (
            <li className='star' key={i}>
                {props?.rating > i ? <BsStarFill/> : <BsStar/>}   
            </li>
        ))}
        </Wrapper>
    );

}

export default StarRating


const Wrapper = styled.ul`
    --star-yellow:#FFB503;

    display:flex;
    flex-direction:row;
    justify-content: center;

    .star {
        margin:0.5rem 0.1rem;
        color:var(--star-yellow);
    }
    
`