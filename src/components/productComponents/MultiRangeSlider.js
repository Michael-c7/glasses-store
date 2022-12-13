import React, { useCallback, useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const MultiRangeSlider = ({ min, max , actionOnChange, actionOnChangeAdditionalArgs}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);



  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    actionOnChange({ min: minVal, max: maxVal }, ...actionOnChangeAdditionalArgs)
  }, [minVal, maxVal]);




  return (
    <Wrapper>
      <input
        id='multiRangeSlider-min-price'
        type='range'
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          // using setTimeout to redirect the useState variables to the callback queue.
          setTimeout(() => setMinVal(value), 0);
          // setMinVal(value);
          event.target.value = value.toString();
        }}
        className={classnames('thumb thumb--zindex-3', {
          'thumb--zindex-5': minVal > max - 100
        })}
      />
      <input
        id='multiRangeSlider-max-price'
        type='range'
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          // using setTimeout to redirect the useState variables to the callback queue.
          setTimeout(() => setMaxVal(value), 0);
          // setMaxVal(value);
          event.target.value = value.toString();
        }}
        className='thumb thumb--zindex-4'
      />

      <div className='slider'>
        <div className='slider__track'></div>
        <div ref={range} className='slider__range'></div>
        <div className='slider__left-value'>${minVal}</div>
        <div className='slider__right-value'>${maxVal}</div>
      </div>
    </Wrapper>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default MultiRangeSlider;
const Wrapper = styled.section`
    position:relative;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding:1rem 0.25rem;
    
    height:75px;
    margin-top:-1rem;
  
  
  .slider {
    position:relative;
    width: 200px;
  }


  .slider__track,
  .slider__range,
  .slider__left-value,
  .slider__right-value {
    position: absolute;
  }
  
  .slider__track,
  .slider__range {
    border-radius: 3px;
    height: 5px;
  }
  
  .slider__track {
    background-color: #ced4da;
    width: 100%;
    z-index: 1;
  }
  
  .slider__range {
    // background-color: #9fe5e1;
    background-color:#666;
    z-index: 2;
  }



  
  .slider__left-value,
  .slider__right-value {
    // color: #dee2e6;
    color:#666;
    // font-size:12px;
    font-size:14px;
    margin-top:20px;
    
  }
  
  .slider__left-value {
    left: -3px;
  }
  
  .slider__right-value {
    right: -6px;
  }
  
  /* Removing the default appearance */
  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }
  
  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 200px;
    outline: none;
  }
  
  .thumb--zindex-3 {
    z-index: 3;
  }
  
  .thumb--zindex-4 {
    z-index: 4;
  }
  
  .thumb--zindex-5 {
    z-index: 5;
  }
  
  /* For Chrome browsers */
  .thumb::-webkit-slider-thumb {
    // background-color: #f1f5f7;
    background-color:#222;
    border: none;
    border-radius: 50%;
    // box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    // height: 18px;
    // width: 18px;
    height: 15px;
    width: 15px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
  
  /* For Firefox browsers */
  .thumb::-moz-range-thumb {
    // background-color: #f1f5f7;
    background-color:#222;
    border: none;
    border-radius: 50%;
    // box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    // height: 18px;
    // width: 18px;
    height: 15px;
    width: 15px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
  
`