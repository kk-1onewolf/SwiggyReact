import React, { Component } from 'react';
import './Header.css'
import TabOption from './TabOption';
import options from "./header.option"
function optionHelper(option)
{
    return (<TabOption key={option.id} name={option.name}/> )
}
function Header() {
    return (<div className='header'>
        <div className='logo_and_location'>
           <div className='logo'>
            <img className = 'logo_img' src = "https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png"/>
           </div> 
           <div className='location'>
             <h3>Bangalore,Karnataka</h3>
             
           </div>
        </div>
    <div className='tab_options'>
      {options.map((option)=>{
        return optionHelper(option)
      })
      }
     
    </div>
    </div>);
  
}

export default Header;
