import React from 'react'
import styled from 'styled-components'

import maleImage from '../assets/banner2_images/banner2__male.png'
import womenImage from '../assets/banner2_images/banner2__women.png'
import kidImage from '../assets/banner2_images/banner2__kid.png'


const Banner2 = () => {
    const banner2Data = [
        {
            img:maleImage,
            text:'New Arrivals  Mens',
            bgColor:'#D6C798',
        },
        {
            img:womenImage,
            text:'New Arrivals Womens',
            bgColor:'#2D333D',
        },
        {
            img:kidImage,
            text:'New Arrivals Kids',
            bgColor:'#D78391',
        }
    ]


    
  return (
    <Wrapper>
        <ul className='banner2__items'>
            {banner2Data.map((item, index) => {
                return (
                    <li className='banner2__item'style={{backgroundColor:item.bgColor}} key={index}>
                        <img className={`banner2__img banner2__img--${index}`} src={item.img} alt={item.text}/>
                        <div className='banner2__info'>
                            <h2 className='banner2__heading'><div>{item.text.slice(0,12)}</div>{item.text.slice(12)}</h2>
                            <button className='banner2__shop-btn'>Shop Now</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    </Wrapper>
  )
}

export default Banner2

const Wrapper = styled.section`
    width:100%;
    height:500px;

    .banner2__items {
        display:flex;
        width:inherit;
        height:100%;
    }


    .banner2__item {
        background-color:#efefef;
        flex:1;
        margin:0 0.75rem;
        position:relative;
        // overflow:hidden;
    }

    .banner2__info {
        position:absolute;
        z-index:10;
        left:0;
        bottom:0;
        margin:2rem;
        color:#fff;
        
    }

    .banner2__img {
        position:absolute;
        width:260px;
        left:50%;
        top:100%;
        transform:translate(-50%, -100%);
    }

    .banner2__img--0 {
        max-width:270px;
        width:25vh;
    }

    .banner2__img--1 {
        width:290px;
    }

    .banner2__img--2 {
        width:340px;
    }


    .banner2__heading {
        font-weight:400;
    }

    .banner2__shop-btn {
        border:none;
        background:none;
        color:#fff;
        font-size:1.1rem;
        margin-top:1rem;
    }



`