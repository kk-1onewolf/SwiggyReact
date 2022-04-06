import React,{Components} from 'react';
import DISH_LIST from "../constants/restroDetails.list"

 function updateDishInCart(dishDetailCopy){
   
    return (current)=>{
      if(current.id === dishDetailCopy.id)
      {
        current.quantity=current.quantity+1;
      }
    }
  }
  
  function findDish(detailOfDish){
    
    return (dish)=>{
        return  dish.id===detailOfDish.id
    }
    
  }
  function handleClickHepler(detailOfDish,cart){
    let newCart=[...(cart)];
    let dishDetailCopy={
      id : detailOfDish.id    
    };
    
    let isInCart=(newCart.find(findDish(detailOfDish)));
    
    if(isInCart===undefined)
    {
     dishDetailCopy.quantity=1;
     newCart.push(dishDetailCopy);
    }
    else
   {
      newCart.forEach(updateDishInCart(dishDetailCopy));
   }
   return newCart;
    
  }
  function calculateTotal(cart){
    let total=0;
    
   cart.forEach((cartItem)=>{
      let cartDish=((DISH_LIST).find(findDishById(cartItem)));
      total += cartDish.details.price*cartItem.quantity;
    });
    return total;
  }
  function findDishById(dish){

    return (dishInList)=>
    {
        return (dishInList.id===dish.id);
    }
  }

  export {handleClickHepler,findDishById,calculateTotal};
