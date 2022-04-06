import React,{ Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Button from './Button';
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
TablePaginationActions.defaultProps={
  dishList:[],
  getUpdatedCartValue:()=>{}
}
TablePaginationActions.propTypes={
  dishList:propTypes.array,
  getUpdatedCartValue:propTypes.func
}
function Menu(props){

    let {dishList,getUpdatedCartValue}=props;
    
    return ( 
        <div>
             {dishList.map((dish) => {
           return (
          <div className="restrodetaillist">
            <div className="restrodetaillist-info">
            <h3>{dish.details.name}</h3>
            <p>{"Rs. "+dish.details.price}</p>
            <p>{dish.details.description}</p>
            <img className="image-here"  src={dish.details.image}/>
            </div>
            <Button dish={dish} getUpdatedCartValue={getUpdatedCartValue}/>
          </div>

        );
      })
}
        </div>
       );
}

export default Menu 