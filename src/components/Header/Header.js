import React, { Component } from 'react';
import './Header.css'
import TabOption from './TabOptions/TabOption/TabOption';
export class Header extends Component {
  render() {
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
      <TabOption key={1} name={'Search'}/> 
      <TabOption key={2} name={'Offers'}/> 
      <TabOption key={3} name={'Sign In'}/> 
      <TabOption key={4} name={'Cart'}/> 
        </div>
    </div>);
  }
}

export default Header;
