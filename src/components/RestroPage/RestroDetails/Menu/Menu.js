import React,{ Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import AddDishButton from './AddDishButton';
import { changeSelectedCategory } from '../../../../redux/action/productAction';
import {useSelector,useDispatch} from  "react-redux"
Menu.defaultProps={
  dishList:[],
  getUpdatedCartValue:()=>{}
}
Menu.propTypes={
  dishList:propTypes.array,
  getUpdatedCartValue:propTypes.func
}

function changeCategory(dispatch,payload){

  return ()=>{
    dispatch(changeSelectedCategory(payload))
  }
  
}
function Menu(props){
  const currentCategory= useSelector((state)=> state.updateCategory.categorySelected)
  
   const dispatch= useDispatch();
   
    let {dishList,getUpdatedCartValue}=props;
    let categoryBasedMenu=dishList.find((dish)=>{
                
      return dish.details.category===currentCategory;
   
 
    })
   
    return ( 
       <div className="restrolists">
        <div className="restrolists-left">
          Categories:
          <div className="recommendation">
            <div onClick={changeCategory(dispatch,"indian")}>Indian</div>
            <div onClick={changeCategory(dispatch,"chinese")}> Chinese </div>
            <div onClick={changeCategory(dispatch,"italian")}>Italian</div>
          </div>
        </div>
        
        <div>{categoryBasedMenu.map((dish) => {
           return (
          <div className="restrodetaillist">
            <div className="restrodetaillist-info">
            <h3>{dish.details.name}</h3>
            <p>{"Rs. "+dish.details.price}</p>
            <p>{dish.details.description}</p>
            <img className="image-here"  src={dish.details.image}/>
            </div>
            <AddDishButton dish={dish} getUpdatedCartValue={getUpdatedCartValue}/>
          </div>);
          }
       )
      }
      </div>
    </div>
    )
  }
      


export default Menu 