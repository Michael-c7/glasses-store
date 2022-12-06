import React from 'react'
import styled from 'styled-components'

import { BsFillGrid3X2GapFill } from 'react-icons/bs'
import { FaList } from 'react-icons/fa'
import { FiFilter } from 'react-icons/fi'
import SortDropdown from './SortDropdown'

import { useFilterContext } from '../../contexts/filter_context'
const FilterProductsBar = () => {
    const { openMobileFilterMenu, closeMobileFilterMenu, isMobileFilterOpen } = useFilterContext()

    const productSortOptions = {
        /*sortName is used for the label text,
        for, name and id attributes on the label and select */
        sortName:'sort by',
        sortValue:'sort-by',
        optionValues:[
            {
                value:'default',
                text:'Default',
            },
            {
                value:'price-lowest',
                text:'Price (Lowest)',
            },
            {
                value:'price-highest',
                text:'Price (Highest)',
            },
            {
                value:'rating-highest',
                text:'Rating (Highest)',
            },
            {
                value:'rating-lowest',
                text:'Rating (Lowest)',
            },
            {
                value:'name-a-z',
                text:'Name (A - Z)',
            },
            {
                value:'name-z-a',
                text:'Name (Z - A)',
            },
            
        ]
    }

    const productSortAmount = {
        /*sortName is used for the label text,
        sortValue is for the for, name and id attributes
        on the label and select */
        sortName:'show',
        sortValue:'sort-amount',
        optionValues:[
            {
                value:'4',
                text:'4',
            },
            {
                value:'9',
                text:'9',
            },
            {
                value:'18',
                text:'18',
            },
            {
                value:'25',
                text:'25',
            },
            {
                value:'50',
                text:'50',
            },
            {
                value:'100',
                text:'100',
            },
        ]
    }


  return (
    <Wrapper>
        <>
            <div className='icon-list'>
                {/*do the mobile show hide for this filter bnt, also do the mobile and click function ability */}
                <div className='icon-container filter-icon-container' onClick={openMobileFilterMenu}>
                    <FiFilter/>
                </div>

                <div className='icon-container grid-icon-container'>
                    <BsFillGrid3X2GapFill/>
                </div>
                <div className='icon-container list-icon-container'>
                    <FaList/>
                </div>
            </div>
        </>
        <div className='filterProductsBar__sort-outer-container'>
            <SortDropdown sortOptions={productSortOptions}/>
            <SortDropdown sortOptions={productSortAmount}/>
        </div>
    </Wrapper>
  )
}

export default FilterProductsBar


const Wrapper = styled.section`
    background:#fff;
    border:1px solid #efefef;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1rem 1rem;
    margin-bottom:2rem;


    .filterProductsBar__sort-outer-container {
        display:flex;
        align-items:center;
    }

    .icon-list {
        display:flex;
        font-size:1.10rem;
        line-height:36px;
    }

    .icon-container {
        display:flex;
        justify-content:center;
        align-items:center;
        width:40px;
        height:40px;
        border-radius:100px;
        border:2px solid #000;
        margin:0 0.25rem;
        transition:50ms ease;
    }

    .icon-container:hover {
        color:var(--red);
        border:2px solid var(--red);
        cursor:pointer;
    }

    .filter-icon-container {
        margin-right:1rem;
        display:none;
    }

    .grid-icon-container {
        font-size:1.3rem;
    }

    .FilterProductsBar__sort-amt-container {
        margin-left:1rem;
    }

    @media (max-width: 870px) {
        justify-content:center;
        flex-direction:column;

        .icon-list {
            margin-bottom:1rem;
        }

        .filter-icon-container {
            display:flex;
        }

        .filterProductsBar__sort-outer-container {
            flex-direction:column;
        }

        .filterProductsBar__sort-outer-container > * {
            margin:0.5rem 0;
        }
        
    }

`