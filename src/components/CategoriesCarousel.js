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


const CategoriesCarousel = () => {
    let [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
    // 1rem --> 16px, spacing in pixels
    let spacing = 16;
    let cardSpacingTrans = spacing * currentSlideIndex;
    // cardWidth in pixels
    let cardWidth = 400;
    let cardWidthTrans = -cardWidth * currentSlideIndex;
    let cardWidthFullTrans = cardWidthTrans - cardSpacingTrans;

    let [visibleCardAmt, setVisibleCardAmt] = React.useState(3)
    let [totalWidth, setTotalWidth] = React.useState(window.innerWidth)
    let lastSlideIndex = visibleCardAmt > 1 ? (categoriesCarouselData.length / visibleCardAmt) + 1 : categoriesCarouselData.length - 1;

    const prevSlide = _ => {
        if(currentSlideIndex === 0) {
            setCurrentSlideIndex(lastSlideIndex)
        } else {
            setCurrentSlideIndex(currentSlideIndex - 1)
        }
    }



    const nextSlide = _ => {
        if(currentSlideIndex === lastSlideIndex) {
            setCurrentSlideIndex(0)
        } else {
            setCurrentSlideIndex(currentSlideIndex + 1)
        }
    }


    const getWidth = _ => {
        setTotalWidth(window.innerWidth)
    }

    React.useEffect(() => {
        window.addEventListener("resize", getWidth);
        return () => window.removeEventListener('resize',getWidth)
    })


    React.useEffect(() => {
        // the breakpoint are where the card amount shown on screen changes
        // the breakpoints are in pixels
        let firstBreakpoint = 768;
        let secondBreakPoint = 600;
        if(totalWidth <= firstBreakpoint && totalWidth >= secondBreakPoint) {
            setVisibleCardAmt(2)
        } else if(totalWidth <= secondBreakPoint) {
            setVisibleCardAmt(1)
        } else {
            // 3 is the default amount of cards shown on screen
            setVisibleCardAmt(3)
        }
    }, [totalWidth])


  return (
    <Wrapper>
        <div className='parallax'></div>

        <div className='categoriesCarousel__outer-container'>
            <h2 className='categoriesCarousel__heading'>Categories</h2>

            <button className='categoriesCarousel__slider-btn categoriesCarousel__prev-btn' onClick={prevSlide}>
                <GrPrevious/>
            </button>

            <button className='categoriesCarousel__slider-btn categoriesCarousel__next-btn' onClick={nextSlide}>
                <GrNext/>
            </button>

            <div className='categoriesCarousel__inner-container'>

                <ul className='categoriesCarousel__slides' style={{transform:`translateX(${cardWidthFullTrans}px)`}}>
                    {categoriesCarouselData.map((element, index) => {
                        return (
                            <li className='categoriesCarousel__slide' key={index}>
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
        --card-spacing-amt:1rem;
        /*
        this part is the actual width --> calc(var(--card-width) * var(--card-amt-shown)
        this part is the spacing --> (var(--card-amt-shown) * var(--card-spacing-amt)))
        the entire thing is the width plus the spacing
        */
        --card-outer-width:calc(var(--card-width) * var(--card-amt-shown) + (var(--card-amt-shown) * var(--card-spacing-amt)));


        
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
            position:absolute;
            color:#fff;
            width:var(--card-outer-width);
            left:50%;
            top:50%;
            transform:translate(-50%, -50%);
            height:100%;
            margin-top:3rem;
        }

        .categoriesCarousel__heading {
            text-align:center;
            margin:1.5rem 0;
            text-align:center;
            font-size:2.25rem;
            font-weight:500;
            color:#fff;
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
            --headingSectionHeight:50.39px;
            top:calc(50% + var(--headingSectionHeight));
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

        .categoriesCarousel__inner-container {
            position:absolute;
            overflow:hidden;
            width:100%;
            height:100%;
        }

        .categoriesCarousel__slides {
            position:absolute;
            display:flex;
            height:calc(var(--categoriesCarouselHeight) - 100px);
            
            --spacing:1rem;
            /*use this is index to control the current slide*/
            --current-index:0;
            --card-spacing-trans:var(--spacing) * var(--current-index);
            --card-width-trans:((calc(-1 * var(--card-width))) * var(--current-index));
            /*how the card transitions*/
            --card-width-full-trans:calc((-400px * var(--current-index)) - (var(--spacing) * var(--current-index)));

            // transform:translateX(var(--card-width-full-trans));
            transition: 0.5s ease;
        }

        .categoriesCarousel__slide {
            position:relative;
            width:var(--card-width);
            height:100%;
            margin:0 0.5rem;
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










        @media (max-width: 1435px) {
            .categoriesCarousel__outer-container {
                width:var(--card-outer-width);
                left:50%;
                top:50%;
                transform:translate(-50%, -50%) scale(0.8);
                height:100%;
                margin-top:-0rem;
            }
        }

        @media(max-width: 1130px) {
            .categoriesCarousel__outer-container {
                width:var(--card-outer-width);
                left:50%;
                top:50%;
                transform:translate(-50%, -50%) scale(0.7);
                height:100%;
                margin-top:0rem;
            }
        }

        @media(max-width: 990px) {
            height:500px;

            .categoriesCarousel__outer-container {
                width:var(--card-outer-width);
                left:50%;
                top:50%;
                transform:translate(-50%, -50%) scale(0.6);
                height:100%;
                margin-top:-3rem;
            }
        }

        @media(max-width: 890px) {
            height:500px;

            .categoriesCarousel__outer-container {
                width:var(--card-outer-width);
                left:50%;
                top:50%;
                transform:translate(-50%, -50%) scale(0.5);
                height:100%;
                margin-top:-3rem;
            }
        }

        @media(max-width: 890px) {
            height:500px;
            --card-amt-shown:2;

            .categoriesCarousel__outer-container {
                width:var(--card-outer-width);
                left:50%;
                top:50%;
                transform:translate(-50%, -50%) scale(0.6);
                height:100%;
                margin-top:-3rem;
            }
        }

        @media(max-width: 600px) {
            height:500px;
            --card-amt-shown:1;

            .categoriesCarousel__outer-container {
                width:var(--card-outer-width);
                left:50%;
                top:50%;
                transform:translate(-50%, -50%) scale(0.6);
                height:100%;
                margin-top:-3rem;
            }
        }

        @media(max-width: 375px) {
            height:500px;
            --card-amt-shown:1;

            .categoriesCarousel__outer-container {
                width:var(--card-outer-width);
                left:50%;
                top:50%;
                transform:translate(-50%, -50%) scale(0.5);
                height:100%;
                margin-top:-3rem;
            }
        }

        @media(max-width: 300px) {
            .categoriesCarousel__outer-container {
                width:var(--card-outer-width);
                left:50%;
                top:50%;
                transform:translate(-50%, -50%) scale(0.4);
                height:100%;
            }
        }
`