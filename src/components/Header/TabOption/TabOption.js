import React, { Component } from 'react';
import './TabOption.css';

function  TabOption(props){
  let {name}=props
  return <div className='tab_option'>
        <div className='tab_name'>{name}</div>
    </div>;
}
export default TabOption;
