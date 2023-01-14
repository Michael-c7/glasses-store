import React from 'react'
import styled from 'styled-components'

// icons
import { GiCommercialAirplane, GiWallet } from 'react-icons/gi'
import { FiGift } from 'react-icons/fi'
import { BsHeadset } from 'react-icons/bs'

const serviceData = [
    {
        Icon:GiCommercialAirplane,
        heading:'FREE SHIPPING WORLDWIDE',
        subHeading:'On orders over $150',
    },
    {
        Icon:GiWallet,
        heading:'CASH ON DELIVERY',
        subHeading:'100% money back guarantee',
    },
    {
        Icon:FiGift,
        heading:'SPECIAL GIFT CARD',
        subHeading:'Offer special bonuses with gift',
    },
    {
        Icon:BsHeadset,
        heading:'24/7 CUSTOMER SERVICE',
        subHeading:'Call us 24/7 at 123 - 456 - 789',
    },
]


const ServiceBanner = () => {
  return (
    <Wrapper>
        <ul className='serviceBanner__items'>
            {serviceData.map((item, index) => {
                const {Icon, heading, subHeading} = item
                return (
                    <li className='serviceBanner__item' key={index}>
                        <div className='serviceBanner__icon-container'>
                            <Icon className='serviceBanner__icon'/>
                        </div>
                        <h2 className='serviceBanner__heading'>{heading}</h2>
                        <h3 className='serviceBanner__sub-heading'>{subHeading}</h3>
                    </li>
                )
            })}
        </ul>
    </Wrapper>
  )
}

export default ServiceBanner


const Wrapper = styled.section`
    padding:4rem 0;
    background:#fff;
    width:100%;

    .serviceBanner__items {
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .serviceBanner__item {
        margin:0 4rem;
        text-align:center;
    }

    .serviceBanner__icon-container {
        font-size:3rem;
        color:#4A4A4A;
    }

    .serviceBanner__heading {
        font-size:1rem;
        font-weight:400;
        margin-bottom:0.25rem;
    }

    .serviceBanner__sub-heading {
        font-weight:300;
        font-size:0.85rem;
    }


    @media only screen and (max-width: 1024px) {
        padding:2rem 0;

        .serviceBanner__item {
            margin:0 2rem;
        }
    }


    @media only screen and (max-width: 768px) {
        .serviceBanner__items {
            display:flex;
            flex-direction:column;
        }

        .serviceBanner__item {
            margin:1.5rem 0;
            text-align:center;
        }
    }
`