import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import { useProductsContext } from '../contexts/products_context'
import { GrPrevious, GrNext } from 'react-icons/gr'
import Loading from './Loading'


const FeaturedCarousel = () => {
    const { products, isProductsLoading } = useProductsContext()
    
    let [productData, setProductData] = React.useState([])
    let [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
    
    const itemAmtCarousel = 10
    // 1rem --> 16px, spacing in pixels
    const spacing = 16;
    const cardSpacingTrans = spacing * currentSlideIndex;
    // cardWidth in pixels
    const cardWidth = 300;
    const cardWidthTrans = -cardWidth * currentSlideIndex;
    const cardWidthFullTrans = cardWidthTrans - cardSpacingTrans;

    let [visibleCardAmt, setVisibleCardAmt] = React.useState(4)
    let [totalWidth, setTotalWidth] = React.useState(window.innerWidth)

    let [lastSlideIndex, setLastSlideIndex] = React.useState(visibleCardAmt > 1 ? (productData.length / visibleCardAmt) + 1 : productData.length - 1)

    const prevSlide = _ => {
        if(currentSlideIndex === 0) {
            setCurrentSlideIndex(currentSlideIndex)
        } else {
            setCurrentSlideIndex(currentSlideIndex - 1)
        }
    }

    const nextSlide = _ => {
        if(currentSlideIndex === lastSlideIndex) {
            setCurrentSlideIndex(currentSlideIndex)

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
        // should corelate w/ whats in the css
        let firstBreakpoint = 1000;
        let secondBreakPoint = 768;
        let thirdBreakPoint = 600;

        if(totalWidth <= firstBreakpoint && totalWidth >= secondBreakPoint) {
            setVisibleCardAmt(3)
        } else if(totalWidth <= secondBreakPoint && totalWidth >= thirdBreakPoint) {
            setVisibleCardAmt(2)
        } else if(totalWidth <= thirdBreakPoint) {
            setVisibleCardAmt(1)
        } else {
            // 4 is the default amount of cards shown on screen
            setVisibleCardAmt(4)
        }
    }, [totalWidth])

    React.useEffect(() => {
        setProductData(products.slice(0, itemAmtCarousel))
    }, [products])


    React.useEffect(() => {
        setLastSlideIndex(productData.length - visibleCardAmt)
    },[productData.length, visibleCardAmt])



    return (
        <Wrapper>
            {isProductsLoading ? <Loading/> : (
                <div className='featuredCarousel__outer-container'>
                    <h2 className='featuredCarousel__heading'>Featured</h2>
                    <button className='featuredCarousel__slider-btn featuredCarousel__prev-btn' disabled={currentSlideIndex === 0 && true} onClick={prevSlide}>
                        <GrPrevious/>
                    </button>

                    <button className='featuredCarousel__slider-btn featuredCarousel__next-btn' disabled={currentSlideIndex === lastSlideIndex && true} onClick={nextSlide}>
                        <GrNext/>
                    </button>

                    <div className='featuredCarousel__inner-container'>
                        <ul className='featuredCarousel__slides' style={{transform:`translateX(${cardWidthFullTrans}px)`}}>
                            {productData.map((product, index) => {
                                return (
                                    <li className='featuredCarousel__slide' key={index}>
                                        <ProductCard {...{product}}/>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </Wrapper>
    )
}

export default FeaturedCarousel

const Wrapper = styled.section`
        --featuredCarouselHeight:600px;
        --card-width:300px;
        --card-amt-shown:4;
        --card-spacing-amt:1rem;
        /*
        this part is the actual width --> calc(var(--card-width) * var(--card-amt-shown)
        this part is the spacing --> (var(--card-amt-shown) * var(--card-spacing-amt)))
        the entire thing is the width plus the spacing
        */
        --card-outer-width:calc(var(--card-width) * var(--card-amt-shown) + (var(--card-amt-shown) * var(--card-spacing-amt)));

        position:relative;
        height:var(--featuredCarouselHeight);

        .featuredCarousel__outer-container {
            position:absolute;
            color:#fff;
            width:var(--card-outer-width);
            left:50%;
            top:0%;
            transform:translate(-50%, -0%);
            height:100%;
        }


        .featuredCarousel__heading {
            text-align:center;
            margin:1.5rem 0;
            text-align:center;
            font-size:2.25rem;
            font-weight:500;
            color:#000;
        }



        .featuredCarousel__slider-btn {
            position:absolute;
            width:40px;
            height:40px;
            font-size:1rem;
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius:100px;
            background:none;
            border:2px solid #efefef;
            z-index:10;
            transition:0.3s ease;
            top:calc(50% - 40px);
            transform:translateY(-50%);
        }

        .featuredCarousel__slider-btn:hover {
            border-color:#333;
            cursor:pointer;
        }

        .featuredCarousel__prev-btn {
            left:0;
            margin-left:-4rem;
        }
        .featuredCarousel__next-btn {
            right:0;
            margin-right:-4rem;
        }


        // styles the line of the svg
        .featuredCarousel__slider-btn[disabled] polyline {
            stroke:grey;
        }


        .featuredCarousel__slider-btn[disabled]:hover {
            border-color:#efefef;
            cursor:initial;
        }


        .featuredCarousel__inner-container {
            position:absolute;
            overflow:hidden;
            width:100%;
            height:100%;
        }



        
        .featuredCarousel__slides {
            position:absolute;
            display:flex;
            height:calc(var(--featuredCarouselHeight) - 100px);
            
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


        .featuredCarousel__slide {
            position:relative;
            width:var(--card-width);
            height:100%;
            color:#000;
            margin:0 0.5rem;
        }

        @media (max-width: 1435px) {
            .featuredCarousel__outer-container {
                transform:translate(-50%, -0%) scale(0.8);
            }
        }

        @media (max-width: 1145px) {
            .featuredCarousel__outer-container {
                transform:translate(-50%, -0%) scale(0.7);
            }

            .featuredCarousel__slides {
                // height:var(--featuredCarouselHeight);
            }
        }

        @media (max-width:1000px) {
            --card-amt-shown:3;

            .featuredCarousel__outer-container {
                transform:translate(-50%, -0%) scale(0.6);
            }

        @media (max-width: 870px) {
            .featuredCarousel__outer-container {
                transform:translate(-50%, -0%) scale(0.535);
            }
        }
        

        @media (max-width: 768px) {
            --card-amt-shown:2;

            .featuredCarousel__outer-container {
                transform:translate(-50%, -0%) scale(0.6);
            }
        }


        @media (max-width: 600px) {
            --card-amt-shown:1;

            .featuredCarousel__outer-container {
                transform:translate(-50%, -0%) scale(0.7);
            }
        }

        @media (max-width: 425px) {
            .featuredCarousel__outer-container {
                transform:translate(-50%, -0%) scale(0.55);
            }
        }

`