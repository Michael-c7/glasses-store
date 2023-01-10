import React from 'react'
import styled from 'styled-components'

// the > arrow
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
// the >| arrow
import { TbArrowBarRight } from 'react-icons/tb'

const Pagination = () => {
  return (
    <Wrapper>
      <p className='pagination__text-info'>Showing 1 to 9 of 19 (3Pages)</p>
      <ul className='pagination__items'>
        <li className='pagination__item'>
          <div className='pagination__item__content pagination__item-text'>1</div>
        </li>
        <li className='pagination__item'>
          <div className='pagination__item__content pagination__item-text'>2</div>
        </li>
        <li className='pagination__item'>
          <div className='pagination__item__content pagination__item-text'>3</div>
        </li>
        <li className='pagination__item pagination__next-arrow'>
          <div className='pagination__item__content pagination__logo-container'>
            <MdOutlineKeyboardArrowRight className='arrow-right-logo'/>
          </div>
        </li>
        <li className='pagination__item pagination__final-arrow'>
          <div className='pagination__item__content pagination__logo-container'>
            <TbArrowBarRight/>
          </div>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Pagination



const Wrapper = styled.section`
  width:100%;
  border:1px solid #efefef;

  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  flex-direction:row;
  padding:1.5rem 1rem;
  margin:0.5rem 0;

  .pagination__text-info {
    color:gray;
    font-weight:300;
  }

  .pagination__items {
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .pagination__item {
    border:2px solid #ddd;
    width:35px;
    height:35px;
    border-radius:100px;
    margin:0 0.25rem;
    transition:50ms ease;
    position:relative;
    font-size:0.85rem;
  }

  .pagination__item__content {
    position:absolute;

    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
  }

  .pagination__item-text {
    margin-top:1px;
  }

  .arrow-right-logo {
    font-size:1rem;
  }

  .pagination__logo-container {
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .pagination__item:hover {
    border-color:var(--red);
    color:var(--red);
    cursor:pointer;
  }

  .pagination__item--current {
    border-color:var(--red);
    color:var(--red);
  }



  @media (max-width: 425px) {
    justify-content:center;

    .pagination__text-info {
      margin-bottom:1rem;
    }
  }

`