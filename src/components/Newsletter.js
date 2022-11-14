import React from 'react'
import styled from 'styled-components'
import bgPattern from '../assets/newsletter/background-pattern.png'
import dancingGif from '../assets/newsletter/dancing-gif.gif'
import { Button1 } from '../styledComponents/Button1.js'
import { AiOutlineMail } from 'react-icons/ai'
import { useForm, ValidationError } from '@formspree/react';


const Newsletter = () => {
    const [state, handleSubmit] = useForm('xwkzyerz');

    if (state.succeeded) {
        return (
            <Wrapper>
            <div className='newsletter__info'>
                <h2 className='newsletter__heading'>Thanks for Joining!</h2>
                <img src={dancingGif} alt='dancing gif'/>
            </div>
        </Wrapper>
        )
    }

    return (
        <Wrapper>
            <div className='newsletter__info'>
                <h2 className='newsletter__heading'>Newsletter</h2>
                <h3 className='newsletter__sub-heading'>Subscribe to our newsletters now and stay up to date with new collections, the latest lookbooks and exclusive offers.</h3>
                <form className='newsletter__input-container' onSubmit={handleSubmit}>
                    <div className='newsletter__input__inner'>
                        <AiOutlineMail className='newsletter__mail-icon'/>
                        <input className='newsletter__input' placeholder='Enter email here...' type="email" name="email"/>
                    </div>
                    <ValidationError prefix="Email" field="email"errors={state.errors}/>
                    <Button1 className='newsletter__sub-btn' type="submit" disabled={state.submitting}>Subscribe</Button1>
                </form>
            </div>
        </Wrapper>
    )
}

export default Newsletter

const Wrapper = styled.section`
    position:relative;
    height:350px;
    background-image:url(${bgPattern});
    background-position:50%; 

    .newsletter__info {
        position:relative;
        margin:0 auto;
        text-align:center;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        color:#fff;
    }

    .newsletter__heading {
        color:#000;
        font-size:2rem;
        font-weight:500;
        margin:0 0 1rem 0;
    }

    .newsletter__sub-heading {
        color:#111;
        font-weight:300;
        margin:0 0 1.5rem 0;
    }

    .newsletter__input-container {
        position:relative;
        background:#fff;
        margin:0 auto;
        width:600px;
        display:grid;
        grid-template-columns:1fr auto;
    }


    .newsletter__input__inner {
        display:grid;
        grid-template-columns:auto 1fr;
    }

    .newsletter__mail-icon {
        position:relative;
        color:gray;
        font-size:1.25rem;
        display:flex;
        top:50%;
        transform:translateY(-50%);
        margin:0 1rem;
    }

    .newsletter__input {
        border:none;
        margin-top:3px;
    }

    @media (max-width: 700px) {
        .newsletter__sub-heading {
            width:calc(100% - 1rem);
            margin:0 auto 1.5rem auto;
        }

        .newsletter__input-container {
            width:calc(100% - 1rem);
        }
    }

    @media (max-width: 320px) {
        .newsletter__input-container {
            grid-template-columns:1fr;
            grid-template-rows:1fr 1fr;
        }
    }

`