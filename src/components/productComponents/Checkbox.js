import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../../contexts/filter_context'


const Checkbox = (props) => {
    const { updateCategoryFilters, categoryFilters } = useFilterContext()
    const { checkboxData, type} = props
    const [isCheckedInfo, setIsCheckedInfo] = React.useState({condition:false, value:''})


  React.useEffect(() => {
    let categoryFilterArray = categoryFilters[checkboxData.type.toLowerCase()]
    if(isCheckedInfo.condition) {      
      updateCategoryFilters([...categoryFilterArray,isCheckedInfo.value], checkboxData.type.toLowerCase())
    } else {
      if(isCheckedInfo.value && categoryFilterArray.includes(isCheckedInfo.value)) {
        updateCategoryFilters(categoryFilterArray.filter((el) => el !== isCheckedInfo.value), checkboxData.type.toLowerCase())
      }
    }

  }, [isCheckedInfo])


  /*the standard checkbox for most things */
    if(type === 'standard') {
        return (
            <WrapperStandard>      
                {checkboxData.data.map((item, index) => {
                    return (
                      <li className='checkbox-item' key={index}>
                        <label className='box'>{item}
                          <input type='checkbox' id='checkbox-input' onChange={(e) => setIsCheckedInfo({condition:e.target.checked, value:item})}/>
                          <span className='mark'></span>
                        </label>
                      </li>
                    )
                })}
            </WrapperStandard>
          )
  /*the checkbox for color */
    } else if(type === 'color') {
        return (
            <WrapperColor>
                {checkboxData.data.map((item, index) => {
                    return (
                        <li className='checkbox-item' key={index}>
                        <label className='box'>{item}
                            <input type='checkbox' id='checkbox-input' onChange={(e) => setIsCheckedInfo({condition:e.target.checked, value:item})}/>
                            <span className='mark' style={{backgroundColor:item}}></span>
                        </label>
                        </li>
                    )
                })}
          </WrapperColor>
        )
    }


}

export default Checkbox


const WrapperStandard = styled.ul`
.box {
    display: block;
    position: relative;
    padding-left: 28px;
    margin-bottom: 10px;
    cursor: pointer;
    // font-size: 20px;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  /* Hide the default style of the checkbox */
  input[type=checkbox] {
    visibility: hidden;
  }


  /* Create a custom checkbox */
  .mark {
    position:absolute;
    top:3px;
    left:0px;
    height:20px;
    width:20px;
    background-color:#efefef;
    transition:all 0.2s ease;
  }


  /* Specify the background color for the checkbox while hovering */
  .box:hover input + .mark {
    background-color:#e0e0e0;
  }


  /* Specify the background color for the checkbox when the checkbox is active */
  .box input:active + .mark {
    background-color: #ccc;
  }


  /* Specify the background color for the checkbox when it is checked */
  .box input:checked + .mark {
    background-color:#8ebf42;
    background-color:var(--red);
    
  }


  /* Checkmark to be shown in checkbox */
  /* It will not be shown when not checked */
  .mark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Display checkmark when checked */
  .box input:checked + .mark:after {
    display: block;
  }

  
  /* Styling the checkmark using webkit */
  /* Rotated the rectangle by 45 degree and showing only two border to make it look like a tick mark */
  .box .mark:after {
    left: 8px;
    bottom: 5px;
    width: 6px;
    height: 12px;
    border: solid #eee;
    border-width: 0 4px 4px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

`










const WrapperColor = styled.ul`
    display:grid;
    grid-template-columns:repeat(2, auto);
    overflow:hidden;
    transition:height 0.5s;

  
  
  
  
  .box {
      display:block;
      position:relative;
      padding-left:28px;
      margin-bottom:10px;
      cursor:pointer;
      // font-size: 20px;
  
      -webkit-user-select: none; /* Safari */
      -ms-user-select: none; /* IE 10 and IE 11 */
      user-select: none; /* Standard syntax */
    }
  
    /* Hide the default style of the checkbox */
    input[type=checkbox] {
      visibility: hidden;
    }
  
  
    /* Create a custom checkbox */
    .mark {
      position:absolute;
      top:3px;
      left:0px;
      height:20px;
      width:20px;
      // transition:all 0.2s ease;
    }
  
  
  
  
  
    /* Specify the background color for the checkbox when it is checked */
    .box input:checked + .mark {
      border:5px solid white;
    }
  
  
    /* Checkmark to be shown in checkbox */
    /* It will not be shown when not checked */
    .mark:after {
      content: '';
      position: absolute;
      display: none;
    }
  
    /* Display checkmark when checked */
    .box input:checked + .mark:after {
      display: block;
    }
  
    
    /* Styling the checkmark using webkit */
    /* Rotated the rectangle by 45 degree and showing only two border to make it look like a tick mark */
    .box .mark:after {
      left:-5px;
      top:-5px;
      width:calc(100% + 10px);
      height:calc(100% + 10px);
      border:solid var(--red) 3px;
    }
  
  
  
  
  
  
  
  
  
    /*plus / minus things*/
    --w: 12px;
    --h: 2px;
    --bg: #333;
    --transition: 0.5s all cubic-bezier(.17,.67,.09,.97);
    
    .wrap {
      width: 25px;
      height: 25px;
      background: #F38630;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    
    .toggle {
      width: var(--w);
      height: var(--h);
      background: var(--bg);
      position: relative;
      transition: var(--transition);
      
      &.open::after {
        transform: rotate(90deg);
        opacity: 1;
      }
      
      &.open {
        transform: rotate(90deg);
      }
      
      &::after {
        content: '';
        width: var(--w);
        transition: var(--transition);
        transition-delay: .1s;
        height: var(--h);
        position: absolute;
        opacity: 0;
        background: var(--bg);
      }
    }
    
    
`