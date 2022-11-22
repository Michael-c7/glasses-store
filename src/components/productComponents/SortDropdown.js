import React from 'react'
import styled from 'styled-components'

const SortDropdown = ({ sortOptions }) => {
  const [sortValue, setSortValue] = React.useState('')
  
  React.useEffect(() => {
    console.log(sortValue)
  }, [sortValue])

  return (
    <Wrapper>
       <label className='sort-label' htmlFor={`${sortOptions.sortValue}`}>{sortOptions.sortName}:</label>
        <div className='select-dropdown sort-container'>
            <select name={`${sortOptions.sortValue}`} id={`${sortOptions.sortValue}`} onChange={e => setSortValue(e.target.value)}>
                {sortOptions.optionValues.map((option, index) => {
                  return (
                    <option value={`${option.value}`} key={index}>{option.text}</option>
                  )
                })}
            </select>
        </div>
    </Wrapper>
  )
}

export default SortDropdown

const Wrapper = styled.section`
  display:flex;
  align-items:center;
  flex-direction:row;
  margin:0 1rem;

  .sort-label {
    font-size:1rem;
    font-weight:400;
    text-transform: capitalize;
    margin-top:2px;
    margin-right:5px;
  }

  /*select*/
  .select-dropdown {
    position: relative;
    background-color: #fff;
    width: auto;
    float: left;
    max-width: 100%;
    border-radius: 2px;
    border:1px solid #ddd;
  }

  .select-dropdown select {
    font-family: "helvetica neue", helvetica;
    font-size: 1rem;
    font-weight: 200;
    max-width: 100%;
    padding: 8px 24px 8px 10px;
    border: none;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color:#505050;
  }

  .select-dropdown select:hover {
    cursor:pointer;
  }

  .select-dropdown select:active, .select-dropdown select:focus {
    outline: none;
    box-shadow: none;
  }

  .select-dropdown:after {
    content: " ";
    position: absolute;
    top: 50%;
    margin-top: -2px;
    right: 8px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #aaa;
  }


`