import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


// images
import mensGlasses from '../assets/categoryCarousel/mens-glasses.jpg'
import mensSunglasses from '../assets/categoryCarousel/mens-sunglasses.jpg'
import womensGlasses from '../assets/categoryCarousel/womens-glasses.jpg'
import womensSunglasses from '../assets/categoryCarousel/womens-sunglasses.jpg'
import kidsGlasses from '../assets/categoryCarousel/kids-glasses.jpg'
import kidsSunglasses from '../assets/categoryCarousel/kids-sunglasses.jpg'
import parallaxImage from '../assets/categoryCarousel/parallax-img.jpg'
// icons
import { GrPrevious, GrNext } from 'react-icons/gr'


const CategoriesCarousel = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)


     const categoriesCarouselData = [
        {
            image:mensGlasses,
            heading:'Mens Glasses'
        },
        {
            image:mensSunglasses,
            heading:'Mens Sunglasses'
        },
        {
            image:womensGlasses,
            heading:'Womens Glasses'
        },
        {
            image:womensSunglasses,
            heading:'Womens Sunglasses'
        },
        {
            image:kidsGlasses,
            heading:'Kids Glasses'
        },
        {
            image:kidsSunglasses,
            heading:'Kids Sunglasses'
        },
    ]


    let cardsInSingleSlideAmt = 3;
    let totalSlideAmt = Math.round(categoriesCarouselData.length / cardsInSingleSlideAmt)

    
    let slides = Array.from(({length:totalSlideAmt})).map((_, index) => {
        if(index === 0) {
            return [
                categoriesCarouselData[0],
                categoriesCarouselData[1],
                categoriesCarouselData[2]
            ]
        } else if(index === 1) {
            return [
                categoriesCarouselData[3],
                categoriesCarouselData[4],
                categoriesCarouselData[5]
            ]
        }
    })


    


    const prevBtn = _ => {
        console.log('prev btn')
    }

    const nextBtn = _ => {
        console.log('next btn')
    }


  return (
    <Wrapper>
        <div className='parallax'></div>
        
        <div className='categoriesCarousel-container'>
            <h2 className='categoriesCarousel__heading'>Categories</h2>
            <div className='categoriesCarousel__slides-outer-container'>
                <button className='categoriesCarousel__slider-btn categoriesCarousel__prev-btn' onClick={prevBtn}>
                    <GrPrevious/>
                </button>
                <div className='categoriesCarousel__slides-container'>
                    <ul className='categoriesCarousel__slides'>
                        {slides.map((_, index) => {
                            return (
                                <li className={`categoriesCarousel__slide categoriesCarousel__slide--${index}`} key={index}>
                                    {slides[index].map((data, index) => {
                                        return (
                                            <Link className='categoriesCarousel__link' to='/products' key={index}>
                                                <img className='categoriesCarousel__slide-img' src={data.image} alt={data.heading}/>
                                                <div className='categoriesCarousel__heading-container'>
                                                    <h2 className='categoriesCarousel__slide-heading'>{data.heading}</h2>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <button className='categoriesCarousel__slider-btn categoriesCarousel__next-btn' onClick={nextBtn}>
                    <GrNext/>
                </button>

            </div>
        </div>
    </Wrapper>
  )
}

export default CategoriesCarousel

const Wrapper = styled.section`
    --categoriesCarouselHeight:600px;


    position:relative;
    height:var(--categoriesCarouselHeight);

    .parallax {
        height:100%;
        background-image: url(${parallaxImage});
    /* creates the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    // to make image less noticeable
        filter: brightness(0.25) grayscale(100%);
        box-shadow: inset 0 0 100px #111;   
    }

    // removes the parallax effect for mobile
    @media only screen and (max-device-width: 1024px) {
        .parallax {
          background-attachment: scroll;
        }
      }















      .categoriesCarousel-container {
        position:absolute;
        top:0;
        z-index:1;
        left:50%;
        top:50%;
        transform:translate(-50%, -50%);
        width:1000px;
        height:100%;
        // background:orange;
    }

    .categoriesCarousel__heading {
        text-align:center;
        font-size:3rem;
        font-weight:500;
        color:#fff;
        position:absolute;
        z-index:10;

        left:50%;
        transform:translateX(-50%);

        margin-top:1rem;
    }


    .categoriesCarousel__slides-outer-container {
        overflow:hidden;
        
    }


    .categoriesCarousel__slider-btn  {
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        width:50px;
        height:50px;
        font-size:1.5rem;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:100px;
        cursor:pointer;
    }

    .categoriesCarousel__prev-btn {
        left:0;
        margin-left:-4rem;

    }

    .categoriesCarousel__next-btn {
        right:0;
        margin-right:-4rem;
    }







    .categoriesCarousel__slides {
        position:relative;
        display:flex;
        width:100%;
        height:var(--categoriesCarouselHeight);      
    }
    
    .categoriesCarousel__slide {
        position:absolute;
        display:flex;
        width:100%;
        height:65%;
        gap:2rem;
        top:50%;
        transform:translateY(-50%);
    }

    .categoriesCarousel__slide--1 {
        transform:translateY(-50%) translateX(100%);
    }


    .categoriesCarousel__link {
        flex:1;
        position:relative;
    }


    .categoriesCarousel__slide-img {
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .categoriesCarousel__heading-container {
        position:absolute;
        background:rgba(25,25,25,0.75);
        bottom:0;
        width:100%;
        left:0;
    }

    .categoriesCarousel__slide-heading {
        font-size:1.25rem;
        font-weight:400;
        padding:0.5rem 0;
        color:var(--white);
        text-align:center;
    }


`