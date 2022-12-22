import React from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'
import { useProductsContext } from '../contexts/products_context'
import { Link, useLocation } from 'react-router-dom'


const Searchbar = () => {
    const { products } = useProductsContext()


    const [isProductDropdownShown, setIsProductDropdownShown] = React.useState(false)
    const [productsToShow, setProductsToShow] = React.useState([])
    const [searchTerm, setSearchTerm] = React.useState('')
    const searchInputRef = React.useRef()
    let productShowAmt = 5

    let urlLocation = useLocation().pathname


    React.useEffect(() => {
        let filterProducts = products.filter((el) => el.fields.name.includes(searchTerm.toLowerCase()))
        setProductsToShow(filterProducts.slice(0, productShowAmt))
    },[products,searchTerm])


    React.useEffect(() => {
        if(searchTerm.length > 0) {
            setIsProductDropdownShown(true)
        } else {
            setIsProductDropdownShown(false)
        }
    },[searchTerm])



    const handleLink = _ => {
        document.querySelector('#searchbar__search-input').value= ''
        setIsProductDropdownShown(false)
        if(urlLocation.includes('singleProduct')) {
            setTimeout(() => window.location.reload(), 0)
        }
    }


    return (
        <Wrapper>
            <input className='searchbar__search-input' id='searchbar__search-input' placeholder='Search...' ref={searchInputRef} onChange={(e) => setSearchTerm(e.target.value)}/>
            <BiSearch className='searchbar__icon'/>
            <div className={`searchbar__dropdown ${isProductDropdownShown ? 'searchbar__dropdown--show' : 'searchbar__dropdown--hide'}`}>
                <ul className='searchbar__dropdown__items'>
                    {productsToShow.map((product) => {
                        return (
                            <li className='searchbar__dropdown__item' key={product.id}>
                                <Link to={`/singleProduct/${product.fields.productCode}`} onClick={() => handleLink()}>
                                    <img className='dropdown__item__image' src={product?.fields?.image[0].url} alt={product?.fields?.name}/>
                                    <div className='dropdown__item__info'>
                                        <p className='item__info__name'>{product?.fields?.name}</p>
                                        <p className='item__info__price'>${product?.fields?.price}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
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
    position:relative;


    .searchbar__search-input {
        border:none;
        outline:none;
        width:100%;
        padding:0.25rem 0;
        font-family: 'Josefin Sans', sans-serif;
        font-size:1rem;

    }

    .searchbar__search-input::placeholder {
        font-family: 'Josefin Sans', sans-serif;
        font-size:1rem;
    }


    .searchbar__icon {
        font-size:1.25rem;
    }











    .searchbar__dropdown {
        position:absolute;
        width:100%;
        top:25px;
        z-index:100;
        border:1px solid #ddd;
    }

    .searchbar__dropdown--show {
        display:block;
    }

    .searchbar__dropdown--hide {
        display:none;
    }

    .searchbar__dropdown__item {
        padding:0.5rem;
        background:#eee;
        transition:50ms;
    }

    .searchbar__dropdown__item a {
        display:flex;
        flex-direction:row;
    }

    .searchbar__dropdown__item:hover {
        background:#e1e1e1;
    }

    .dropdown__item__image {
        width:75px;
        height:75px;
        object-fit:cover;
    }

    .dropdown__item__info {
        display:flex;
        flex-direction:column;
        align-items:start;
        margin-left:0.5rem;
    }

    .item__info__name {
        text-transform:capitalize;
    }
    
`