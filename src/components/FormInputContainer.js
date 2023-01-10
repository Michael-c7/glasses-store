import React, { useState } from "react";
import { 
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';


import styled from "styled-components";

const FormInputContainer = (props) => {
      const [focused, setFocused] = React.useState(false)

      const handleFocus = (e) => setFocused(true)

        if(props.componentType === 'countryDropdown') {
        /*country dropdown input*/
          return (
            <Wrapper>
              <label className="info-input__label info-input__label--required" htmlFor="payment-country">
              Country
              </label>
            <CountryDropdown 
              className="info-input__input"
              value={props.value}
              onChange={(val) => props.onChangeSetState({...props.onChangeState, country:val})}
            />
            <p className='info-input__error-msg'>{props.errorMessage}</p>
            </Wrapper>
          )
                   
        } else if(props.componentType === 'regionDropdown') {
        /*region dropdown input*/
                return (
                  <Wrapper>
                    <label className="info-input__label info-input__label--required" htmlFor="payment-region">
                    {props.labelText}
                    </label>
                    <RegionDropdown
                      className="info-input__input"
                      country={props.country}
                      value={props.value}
                      onChange={(val) => props.onChangeSetState({...props.onChangeState, region:val})}
                    />
                    <p className='info-input__error-msg'>{props.errorMessage}</p>
                  </Wrapper>
                )
        } else {
          return (
        /*standard input*/
            <Wrapper>
                    <label className={`info-input__label ${props.required ? 'info-input__label--required' : ''}`} htmlFor={props.name}>
                      {props.labelText}
                    </label>
                    <input
                      className='info-input__input'
                      type={`${props.type}`}
                      name={`${props.name}`}
                      id={`${props.name}`}
                      pattern={props.pattern}
                      required={props.required}
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      />
                      <p className='info-input__error-msg'>{props.errorMessage}</p>
                </Wrapper>
            )
        }
}

export default FormInputContainer


const Wrapper = styled.section`
    position:relative;
    display:flex;
    flex-direction:column;
    margin:0.75rem 0;

  .info-input__label {
    font-weight:300;
    margin:0.5rem 0;
  }

  .info-input__label--required {
    position:relative;
  }

  .info-input__label--required::after {
    content:'*';
    position:absolute;
    color:red;
    font-size:1.25rem;
    margin-left:0.5rem;
    top:3px;
  }

  .info-input__input {
    padding:0.35rem;
    font-size:1.1rem;
    line-height:25px;
    border 1px solid #ddd;
    font-weight:400;
    color:#555;
    width:100%;
  }

  .info-input__input:invalid[focused="true"] {
    border:1px solid red;
  }

  .info-input__error-msg {
    color:red;
    font-weight:300;
    font-size:1rem;
    margin-top:0.5rem;
    display:none;
  }


  .info-input__input:invalid[focused="true"] ~ .info-input__error-msg {
    display:block;
  }



`