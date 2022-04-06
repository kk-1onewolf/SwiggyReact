import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
import React, { Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import './TabOption.css';
TablePaginationActions.defaultProps={
   name:""
}
TablePaginationActions.propTypes={
  name:propTypes.string
}
function  TabOption(props){
  let {name}=props
  return <div className='tab_option'>
        <div className='tab_name'>{name}</div>
    </div>;
}
export default TabOption;
