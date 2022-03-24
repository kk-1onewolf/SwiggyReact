import React, { Component } from 'react';
import './Header.css'
import TabOption from './TabOption';
function Header() {
    return (<div className='header'>
        <div className='logo_and_location'>
           <div className='logo'>
            <img className = 'logo_img' src = "https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png"/>
           </div> 
           <div className='location'>
           <h1>Swiggy</h1>
           </div>
        </div>
        <div className='tab_options'>
      <TabOption  name={'Search'}/> 
      <TabOption  name={'Offers'}/> 
      <TabOption  name={'Sign In'}/> 
      <TabOption  name={'Cart'}/> 
        </div>
    </div>);
  
}

export default Header;
