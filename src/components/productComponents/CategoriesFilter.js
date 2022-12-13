import React from 'react'
import styled from 'styled-components'
import Accordion from './Accordion'
import Checkbox from './Checkbox'
import MultiRangeSlider from './MultiRangeSlider'
import { useFilterContext } from '../../contexts/filter_context'
import { MdClose } from 'react-icons/md'
import { generateUniqueId } from '../../utility/misc'

const CategoriesFilter = () => {
	const { 
		getUniqueProductValues,
		isMobileFilterOpen,
		closeMobileFilterMenu,
		updateCategoryFilters,
		clearFilters,
		highestPricedProductAmt,
	} = useFilterContext() 



	const filterCategoryData = [
		/*the getUniqueProductValues rerendering each time,
		which gets the items in a different order is what causes the 
		this bug --V
		fix the bug that happens when you select an option in
		sort by drop it changes how the checkboxes are arranges in categories

		object.freeze(), does not work,
		should do a thing where it doesn't re-render if the length
		of the array is the same is it used to be
		*/
		{
			type:'Gender',
			data:Object.freeze(getUniqueProductValues('gender', 'single')),
		},
        {
          type:'Brand',
          data:getUniqueProductValues('brand', 'single'),
        },
    
        {
          type:'Materials',
          data:getUniqueProductValues('materials', 'single'),
        },
        {
          type:'Color',
          data:getUniqueProductValues('colors', 'multi'),
        },
    ]


  return (
    <Wrapper>
		<header className='categoriesFilter__header'>
			<h2>Categories</h2>
			{isMobileFilterOpen ? (
				<button className='categoriesFilter__close-menu' onClick={closeMobileFilterMenu}>
					<MdClose/>
				</button> 
			): ''}
		</header>

		<input className='categoriesFilter__search' id='filter-searchbar' placeholder='Search' onChange={(e) => updateCategoryFilters(e.target.value, 'searchTerm') }/>

		<ul className='categoriesFilter__categories'>
			{filterCategoryData.map((el, index) => {
				return (
					<li key={index}>
						<Accordion data={{ accordionHeading:`${el.type}`, accordionIndex:generateUniqueId() }}>
							<div className='categoriesFilter__input-container'>
								<Checkbox {...{checkboxData:filterCategoryData[index], type:`${el.type.toLowerCase() === 'color' ? 'color' : 'standard'}`}}/>
							</div>
						</Accordion>
					</li>
				)
			})}
		</ul>

		<div className='categoriesFilter__categories'>
			{/*Price*/}
			<Accordion data={{ accordionHeading:'Price', accordionIndex:generateUniqueId()}}>
				<div className='categoriesFilter__input-container'>
					<MultiRangeSlider 
					min={0}
					max={250}
					actionOnChange={updateCategoryFilters}
					actionOnChangeAdditionalArgs={['price']}
					/>
				</div>
			</Accordion>
		</div>

		<button className='clear-filters-btn' onClick={() => clearFilters()}>clear all filters</button>
    </Wrapper>
  )
}

export default CategoriesFilter

const Wrapper = styled.section`
	--indentation-spacing:0.5rem;

	.categoriesFilter__header {
		display:flex;
		justify-content:space-between;
		align-items:center;
		padding:1rem 0rem;
	}

	.categoriesFilter__close-menu {
		position:relative;
		border:none;
		background:var(--red);
		color:#fff;
		border-radius:2px;
		width:25px;
		height:25px;
		font-size:1.5rem;
		display:flex;
		justify-content:center;
		align-items:center;
		margin-top:-3px;
	}


	.categoriesFilter__categories {
		margin:0 var(--indentation-spacing);
	}

	.categoriesFilter__input-container {
		margin:0 0.75rem;
	}

	.categoriesFilter__search {
		border:none;
		background:#f7f7f7;
		font-size:1.15rem;
		padding:0.5rem;
		margin:2rem  var(--indentation-spacing) 2rem  var(--indentation-spacing);
	}

	.clear-filters-btn {
		margin:0 var(--indentation-spacing);
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