import React,{ Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Button from './Button';
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
import { indian,chinese,italian } from '../../../../redux/action/productAction';
import {useSelector,useDispatch} from  "react-redux"
TablePaginationActions.defaultProps={
  dishList:[],
  getUpdatedCartValue:()=>{}
}
TablePaginationActions.propTypes={
  dishList:propTypes.array,
  getUpdatedCartValue:propTypes.func
}
function fetchChinese(dispatch){

  return ()=>{
    dispatch(chinese())
  }
  
}
function fetchIndian(dispatch){

  return ()=>{
    dispatch(indian())
  }
  
}
function fetchItalian(dispatch){

  return ()=>{
    dispatch(italian())
  }
  
}
function Menu(props){
  const myState= useSelector((state)=> state.buyDish.categorySelected)
  
   const dispatch= useDispatch();
   
    let {dishList,getUpdatedCartValue}=props;
    
    
    return ( 
       <div className="restrolists">
        <div className="restrolists-left">
          Categories:
          <div className="recommendation">
            <div onClick={fetchIndian(dispatch)}>Indian</div>
            <div onClick={fetchChinese(dispatch)}> Chinese </div>
            <div onClick={fetchItalian(dispatch)}>Italian</div>
          </div>
        </div>
        
        <div>
             {dishList.map((dish) => {
               console.log(myState);
              
            if(dish.details.category===myState){
           return (
          <div className="restrodetaillist">
            <div className="restrodetaillist-info">
            <h3>{dish.details.name}</h3>
            <p>{"Rs. "+dish.details.price}</p>
            <p>{dish.details.description}</p>
            <img className="image-here"  src={dish.details.image}/>
            </div>
            <Button dish={dish} getUpdatedCartValue={getUpdatedCartValue}/>
          </div>);
            }
          }
        
         
         
       )
      }
      </div>
    </div>
    )
  }
      


export default Menu 