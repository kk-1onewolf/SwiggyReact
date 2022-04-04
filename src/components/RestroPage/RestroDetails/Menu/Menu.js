import React,{ Component } from 'react';
import Button from './Button';

function Menu(props){

    let {dishList,handleClick}=props;
    
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
            <Button dish={dish} handleClick={handleClick}/>
          </div>

        );
      })
}
        </div>
       );
}

export default Menu 