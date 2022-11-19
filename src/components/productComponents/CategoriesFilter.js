import React from 'react'
import styled from 'styled-components'
import Accordion from './Accordion'
import Checkbox from './Checkbox'
import MultiRangeSlider from './MultiRangeSlider'
import { useFilterContext } from '../../contexts/filter_context'

const CategoriesFilter = () => {
	// const { products } from '../'
	const { getProductAttribute } = useFilterContext()



	const filterCategoryData = [
        {
          type:'Gender',
          data:getProductAttribute('gender', 'single'),
        },
        {
          type:'Brand',
          data:getProductAttribute('brand', 'single'),
        },
    
        {
          type:'Materials',
          data:getProductAttribute('materials', 'single'),
        },
        {
          type:'Color',
          data:getProductAttribute('colors', 'multi'),
        },
    ]

  return (
    <Wrapper>
		<header className='categoriesFilter__header'>
			<h2>Categories</h2>
		</header>


		<input className='categoriesFilter__search' placeholder='Search'/>

		<ul className='categoriesFilter__categories'>
			{filterCategoryData.map((el, index) => {
				return (
					<li key={index}>
						<Accordion data={{ accordionHeading:`${el.type}`, accordionIndex:`${index}` }}>
							<Checkbox {...{checkboxData:filterCategoryData[index], type:`${el.type.toLowerCase() === 'color' ? 'color' : 'standard'}`}}/>
						</Accordion>
					</li>
				)
			})}
		</ul>

		<div className='categoriesFilter__categories'>
			{/*Price*/}
			<Accordion data={{ accordionHeading:'Price', accordionIndex:999}}>
				<MultiRangeSlider 
				min={0}
				max={1000}
				onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
				/>
			</Accordion>
		</div>


		


		<button className='clear-filters-btn'>clear all filters</button>
    </Wrapper>
  )
}

export default CategoriesFilter

const Wrapper = styled.section`



	.categoriesFilter__categories {
		margin:0 0.5rem;
	}




	.categoriesFilter__search {
		border:none;
		background:#f7f7f7;
		font-size:1.15rem;
		padding:0.5rem;
		margin:2rem 0.5rem 2rem 0.5rem;
	}


	.clear-filters-btn {
		margin:0 0.5rem;
		border:none;
		padding:0.5rem 0.5rem;
		font-size:1.15rem;
		transition:100ms ease;
		background:var(--red);
		color:#fff;
	}

	.clear-filters-btn:hover {
		cursor:pointer;
	}

`