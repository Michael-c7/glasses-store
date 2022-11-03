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


  return (
    <Wrapper>
        <div className='parallax'></div>
        
        <div className='categoriesCarousel__outer-container'>
            <h2 className='categoriesCarousel__heading'>Categories</h2>

            <div className='categoriesCarousel__inner-container'>
                <button className='categoriesCarousel__slider-btn categoriesCarousel__prev-btn'>
                    <GrPrevious/>
                </button>

                <button className='categoriesCarousel__slider-btn categoriesCarousel__next-btn'>
                    <GrNext/>
                </button>


                <ul className='categoriesCarousel__slides'>
                    {categoriesCarouselData.map((element) => {
                        return (
                            <li className='categoriesCarousel__slide'>
                                <Link to='products' className='categoriesCarousel__slide__link'>
                                    <img className='categoriesCarousel__slide-img' src={element.image} alt={element.heading}/>
                                    <div className='categoriesCarousel__heading-container'>
                                        <h2 className='categoriesCarousel__slide-heading'>{element.heading}</h2>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </Wrapper>
  )
}

export default CategoriesCarousel

const Wrapper = styled.section`
        --categoriesCarouselHeight:600px;
        --card-width:400px;
        --card-amt-shown:3;
        --card-outer-width:calc(var(--card-width) * var(--card-amt-shown));

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


















        .categoriesCarousel__outer-container {
            // background:rgba(0,155,0,0.2);
            position:absolute;
            top:0;
            color:#fff;
            width:var(--card-outer-width);
            left:50%;
            top:0%;
            transform:translate(-50%, -0%);
            height:600px;
        }


        .categoriesCarousel__heading {
            text-align:center;
            margin:1.5rem 0;
            text-align:center;
            font-size:2.25rem;
            font-weight:500;
            color:#fff;
        }



        .categoriesCarousel__inner-container {
            overflow:hidden;

        }


        .categoriesCarousel__slider-btn  {
            position:absolute;
            width:50px;
            height:50px;
            border:none;
            font-size:1.5rem;
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius:100px;
            cursor:pointer;
            z-index:10;

            top:50%;
            transform:translateY(-50%);
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
            position:absolute;
            display:flex;
            height:500px;
            // gap:1rem;
            
        }
        .categoriesCarousel__slide {
            position:relative;
            width:var(--card-width);
            height:100%;
            
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