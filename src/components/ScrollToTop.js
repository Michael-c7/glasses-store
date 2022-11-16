import React from 'react'
import styled from 'styled-components'
import { BsChevronDoubleUp } from 'react-icons/bs'


const ScrollToTop = () => {
    const [isShown, setIsShown] = React.useState(false)
    const getScrollAmt = _ => window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

    React.useEffect(() => {
        const showOnScroll = _ => {
            if(getScrollAmt() > 500) {
                setIsShown(true)
            } else {
                setIsShown(false)
            }
        }
        window.addEventListener("scroll", showOnScroll);
        return () => window.removeEventListener('scroll', showOnScroll)
    })


 
    if(isShown) {
        return (
                <ScrollWrapper href='#navbar'>
                    <BsChevronDoubleUp />
                </ScrollWrapper>
          )
    } else {
          return <></>
        }
    }



export default ScrollToTop

const ScrollWrapper = styled.a`
    position:fixed;
    background:none;
    z-index:50;
    width:40px;
    height:40px;
    border-radius:100px;
    border:2px solid #000;
    font-size:1.1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    top:90%;
    left:95%;
    transform:translate(-90%, -95%);
    transition:250ms ease;
    

    
    @keyframes bounce {
        from { transform: translate3d(0, 0, 0);}
        to { transform: translate3d(0, 25px, 0);}
    }

    animation: bounce 1s cubic-bezier(0.5, 0.05, 1, 0.5);
    animation-direction: alternate;
    animation-iteration-count: infinite;

    
    :hover {
        cursor:pointer;
        border-color:var(--red);
        color:var(--red);
    }


    .show {
        display:flex;
    }

    .hide {
        display:none;
    }




    @media (max-width: 970px) {
        top:90%;
        left:92%;
        transform:translate(-90%, -92%);
    }

    @media (max-width: 600px) {
        top:90%;
        left:87%;
        transform:translate(-90%, -87%);
    }

    @media (max-width: 320px) {
        top:90%;
        left:82%;
        transform:translate(-90%, -82%);
    }

`