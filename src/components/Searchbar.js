import React from 'react'
import styled from 'styled-components'
import {BiSearch} from 'react-icons/bi'
const Searchbar = () => {
  return (
    <Wrapper>
        <input className='searchbar__search-input' placeholder='Search...'/>
        <BiSearch className='searchbar__icon'/>
    </Wrapper>
  )
}

export default Searchbar


const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:2px solid #000;
    max-width:250px;
    padding-bottom:0.15rem;


    .searchbar__search-input {
        border:none;
        outline:none;
        width:100%;
        padding:0.25rem 0;
        font-family: 'Josefin Sans', sans-serif;
    }

    .searchbar__search-input::placeholder {
        font-family: 'Josefin Sans', sans-serif;
        font-size:1rem;
    }


    .searchbar__icon {
        font-size:1.2rem;
    }
    
`