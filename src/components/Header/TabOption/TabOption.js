import React, { Component } from 'react';
import './TabOption.css';

function  TabOption(props){
  return <div className='tab_option'>
        <div className='tab_name'>{props.name}</div>
    </div>;
}
export default TabOption;
