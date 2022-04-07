import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
import React, { Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import './TabOption.css';
import { Link } from 'react-router-dom'

TablePaginationActions.defaultProps={
   name:""
}
TablePaginationActions.propTypes={
  name:propTypes.string
}
function  TabOption(props){
  let {name}=props
  return <div className='tab_option'>
        
        <Link to={`/${name}`}>
         <div className='tab_name'>{name}</div>
          </Link>
    </div>;
}
export default TabOption;
