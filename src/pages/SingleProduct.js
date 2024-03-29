import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import StarRating from "../components/StarRating";
import { Button1 } from "../styledComponents/Button1";

import { FaMinus, FaPlus } from "react-icons/fa";
import { useProductsContext } from "../contexts/products_context";
import { useCartContext } from "../contexts/cart_context";

// placeholder images
import placeholder1 from "../assets/singleProductImagePlaceholders/chuttersnap-G8ioIHUDfNc-unsplash.jpg";
import placeholder2 from "../assets/singleProductImagePlaceholders/oli-woodman-s7gRHGEmX78-unsplash.jpg";
import placeholder3 from "../assets/singleProductImagePlaceholders/scott-van-daalen-UsALNdok2m4-unsplash.jpg";

const SingleProduct = () => {
  const { products } = useProductsContext();
  const { addProductToCart } = useCartContext();

  let urlLocation = useLocation().pathname;

  const sampleLocation = useLocation();
  let currentProductId = sampleLocation.pathname.slice(15);

  let minInputValueAllowed = 1;
  let maxInputValueAllowed = 999;

  const [productAmt, setProductAmt] = React.useState(1);
  const [currentProduct, setCurrentProduct] = React.useState({});
  const [mainImageState, setMainImageState] = React.useState(null);

  /**
   * @param {string} type either add or subtract
   */
  const setProductAmtFunc = (type) => {
    if (type === "add") {
      if (productAmt >= maxInputValueAllowed) {
        setProductAmt(productAmt + 0);
      } else {
        setProductAmt(productAmt + 1);
      }
    }

    if (type === "subtract") {
      if (productAmt <= minInputValueAllowed) {
        setProductAmt(productAmt - 0);
      } else {
        setProductAmt(productAmt - 1);
      }
    }
  };

  React.useEffect(() => {
    let curr = products?.filter(
      (item) => item.fields.productCode === currentProductId
    )[0];
    setCurrentProduct(curr);
    setProductAmt(1);
  }, [products, urlLocation]);

  React.useEffect(() => {
    setMainImageState(currentProduct?.fields?.image[0].url);
  }, [currentProduct]);

  return (
    <Wrapper>
      <Breadcrumb
        currentLocation={currentProduct?.fields?.name}
        customPath={["Home", "Products"]}
      />
      <div className="singleProduct__container">
        <div className="singleProducts__inner-container">
          <div className="singleProducts__inner">
            {/*images*/}
            <div className="singleProduct__image-container">
              <div className="singleProduct__main-image-container">
                <img
                  className="singleProduct__main-image"
                  src={mainImageState}
                  alt={currentProduct?.fields?.name}
                />
              </div>
              <div className="singleProduct__alt-image-container">
                <img
                  onClick={() =>
                    setMainImageState(currentProduct?.fields?.image[0].url)
                  }
                  className={`singleProduct__alt-image ${
                    mainImageState === currentProduct?.fields?.image[0].url &&
                    "singleProduct__alt-image--current"
                  }`}
                  src={currentProduct?.fields?.image[0].url}
                  title={currentProduct?.fields?.name}
                  alt={currentProduct?.fields?.name}
                />
                <img
                  onClick={() => setMainImageState(placeholder1)}
                  className={`singleProduct__alt-image ${
                    mainImageState === placeholder1 &&
                    "singleProduct__alt-image--current"
                  }`}
                  src={placeholder1}
                  title={currentProduct?.fields?.name}
                  alt={currentProduct?.fields?.name}
                />
                <img
                  onClick={() => setMainImageState(placeholder2)}
                  className={`singleProduct__alt-image ${
                    mainImageState === placeholder2 &&
                    "singleProduct__alt-image--current"
                  }`}
                  src={placeholder2}
                  title={currentProduct?.fields?.name}
                  alt={currentProduct?.fields?.name}
                />
                <img
                  onClick={() => setMainImageState(placeholder3)}
                  className={`singleProduct__alt-image ${
                    mainImageState === placeholder3 &&
                    "singleProduct__alt-image--current"
                  }`}
                  src={placeholder3}
                  title={currentProduct?.fields?.name}
                  alt={currentProduct?.fields?.name}
                />
              </div>
            </div>

            {/*info*/}
            <div className="singleProduct__info-container">
              <div className="singleProduct__info-section">
                <h2 className="info-section__heading">
                  {currentProduct?.fields?.name}
                </h2>
                <div className="info-section__review">
                  <StarRating rating={currentProduct?.fields?.rating} />
                  <p className="info-section__review-amt">
                    {currentProduct?.fields?.reviewAmount} Reviews
                  </p>
                </div>
              </div>

              <div className="singleProduct__info-section singleProduct__info-section-product-info">
                <p className="singleProduct__info-section-product-info__text">
                  <span className="product-info__text__title">
                    Product Code:
                  </span>{" "}
                  <span>{currentProduct?.fields?.productCode}</span>
                </p>
                <p className="singleProduct__info-section-product-info__text">
                  <span className="product-info__text__title">
                    Availability:
                  </span>{" "}
                  <span>In Stock</span>
                </p>
              </div>

              <div className="singleProduct__info-section">
                <p className="info-section__cost-text">
                  ${currentProduct?.fields?.price}
                </p>
                <p className="info-section__tax-text">
                  Ex Tax: ${currentProduct?.fields?.price}
                </p>
              </div>

              <div className="singleProduct__info-section">
                {/*Quantity*/}
                <p>Qty</p>
                <div className="info-section__amount-container">
                  <div className="info-section__amount">
                    <button
                      className="info-section__amount-btn"
                      onClick={() => setProductAmtFunc("subtract")}
                    >
                      <FaMinus />
                    </button>
                    <p className="info-section__num-text">{productAmt}</p>
                    <button
                      className="info-section__amount-btn"
                      onClick={() => setProductAmtFunc("add")}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  {/*add to cart button*/}
                  <Button1
                    onClick={() => addProductToCart(currentProduct, productAmt)}
                  >
                    Add to Cart
                  </Button1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*description*/}
        <div className="singleProduct__description-container">
          <ul className="singleProduct__nav-tabs">
            <li className="singleProduct__nav-tab">Description</li>
          </ul>
          <div className="singleProduct__tab-content">
            <p className="singleProduct__description-text">
              {currentProduct?.fields?.description}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;

const Wrapper = styled.section`
  .singleProducts__inner-container {
    display: flex;
    justify-content: center;
    margin: 0 var(--site-outer-margin);
  }

  .singleProducts__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 2rem 0rem;
  }

  .singleProduct__main-image-container {
    width: 100%;
    height: 700px;
  }

  .singleProduct__main-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .singleProduct__alt-image-container {
    margin-top: 0.75rem;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    grid-gap: 0.5rem;
  }

  .singleProduct__alt-image {
    border: 1px solid #fff;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .singleProduct__alt-image--current {
    border: 1px solid var(--red);
  }

  .singleProduct__alt-image:hover {
    cursor: pointer;
    border: 1px solid var(--red);
    transition: ease 0.25ms;
  }

  .singleProduct__alt-image:first-of-type {
    margin-left: 0;
  }

  .singleProduct__alt-image:last-of-type {
    margin-right: 0;
  }

  .singleProduct__info-section {
    margin: 1rem 0;
    padding: 1rem 0;
    border-bottom: 1px solid #ccc;
  }

  .singleProduct__info-section:first-of-type {
    margin-top: 0;
    padding-top: 0;
  }

  .singleProduct__info-section:last-of-type {
    margin-bottom: 0;
  }

  .info-section__heading {
    font-weight: 500;
    text-transform: capitalize;
  }

  .info-section__review {
    display: flex;
    align-items: center;
  }

  .info-section__review-amt {
    position: relative;
    color: #232323;
    font-weight: 300;
    top: -2px;
    margin-left: 1rem;
  }

  .singleProduct__info-section-product-info__text {
    color: #232323;
    font-weight: 300;
  }

  .info-section__cost-text {
    font-size: 1.5rem;
  }

  .info-section__tax-text {
    color: #232323;
    font-weight: 300;
    font-size: 0.85rem;
    margin-top: 0.25rem;
  }

  .info-section__amount-container {
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 0.75rem 0;
  }

  .info-section__amount {
    border: 1px solid #ccc;
    margin-right: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .info-section__num-text {
    width: 40px;
    text-align: center;
  }

  .info-section__amount-btn {
    height: 100%;
    border: none;
    background: none;
    color: var(--red);
    padding: 0 0.5rem;
  }

  .info-section__amount-btn:hover {
    cursor: pointer;
  }

  .product-info__text__title {
    min-width: 125px;
    display: inline-block;
  }

  .singleProduct__description-container {
    position: relative;
    margin: 2.5rem var(--site-outer-margin) 5rem var(--site-outer-margin);
  }

  .singleProduct__nav-tabs {
    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;
    position: relative;
  }

  .singleProduct__nav-tab {
    text-align: center;
    position: relative;
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--red);
  }

  .singleProduct__nav-tab::after {
    content: "";
    position: absolute;
    width: 85px;
    height: 2px;
    background: var(--red);
    left: 50%;
    transform: translateX(-50%);
    top: 162%;
  }

  .singleProduct__tab-content {
    margin-top: 2rem;
  }

  .singleProduct__description-text {
    color: #232323;
    font-weight: 300;
  }

  // breakpoints
  @media only screen and (max-width: 1440px) {
    .singleProduct__main-image-container {
      height: 600px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .singleProduct__main-image-container {
      height: 500px;
    }
  }

  @media only screen and (max-width: 768px) {
    .singleProduct__main-image-container {
      height: 400px;
    }
  }

  @media only screen and (max-width: 500px) {
    .singleProducts__inner {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
      gap: 1rem;
      padding: 2rem 0rem;
      text-align: center;
    }

    .info-section__amount-container {
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 0.75rem 0;
    }

    .info-section__amount {
      margin-right: 0rem;
      flex-direction: row;
      justify-content: space-between;
      padding: 0.5rem 0;
      margin-bottom: 1rem;
    }

    .product-info__text__title {
      min-width: 25px;
      display: inline-block;
    }

    .info-section__review {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .info-section__review-amt {
      top: -0px;
      margin-left: 0rem;
    }
  }

  @media only screen and (max-width: 425px) {
    .singleProducts__inner {
      padding: 0;
      margin: 0;
    }

    .singleProduct__main-image-container {
      margin-top: 0.75rem;
    }

    .singleProduct__alt-image-container {
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(1, 1fr);
      width: 100%;
      grid-gap: 0.5rem;
    }

    .singleProduct__alt-image {
      border: 1px solid #fff;
      margin: 0;
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 375px) {
    .singleProduct__alt-image-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 320px) {
    .singleProduct__main-image-container {
      height: 300px;
      margin: 0;
    }

    .singleProducts__inner {
      gap: 0rem;
      padding: 1rem 0rem;
    }

    .singleProduct__description-container {
      position: relative;
      margin: 1rem var(--site-outer-margin);
      text-align: center;
    }
  }
`
