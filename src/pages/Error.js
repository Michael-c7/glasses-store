import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button1 } from '../styledComponents/Button1'
const Error = () => {
  return (
    <Wrapper>
      <div className='error__info'>
        <h1 className='error__heading'>Page not found. <div>¯\_(ツ)_/¯</div></h1>
        <Link className='error__btn' to="/">
          <Button1>Go home</Button1>
        </Link>
      </div>
      
    </Wrapper>
  )
}

export default Error


const Wrapper = styled.section`
  width:100%;
  height:100vh;
  .error__info {
    position:absolute;
    left:50%;
    top:25%;
    transform:translate(-50%, -25%);
    text-align:center;
  }
  .error__heading {
    margin-bottom:2rem;
    font-weight:600;
  }
`