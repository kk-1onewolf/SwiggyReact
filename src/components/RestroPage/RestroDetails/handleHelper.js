import React,{Components} from 'react';
import listOfDishes from "./constants/restroDetails.list"
const handleHelper={
 updateDishInCart(detailCopy){
   
    return (current)=>{
      if(current.id === detailCopy.id)
      {
        current.quantity=current.quantity+1;
      }
    }
  },
  
  findDish(detail){
    
    return (dish)=>{
        return  dish.id===detail.id
    }
    
  },
  handleClickHepler(detail,cart){
    let newCart=[...(cart)];
    let detailCopy={
      quantity:0,
      id:detail.id    
    };
    
    let isInCart=(newCart.find(this.findDish(detail)));
    
    if(isInCart===undefined)
    {
     detailCopy.quantity=1;
     newCart.push(detailCopy);
    }
    else
   {
      newCart.forEach(this.updateDishInCart(detailCopy));
   }
   return newCart;
    
  },
  calculateTotal(cart){
    let total=0;
    
   cart.forEach((dish)=>{
      let cartDish=((listOfDishes).find(this.findDishById(dish)));
      total += cartDish.details.price*dish.quantity;
    });
    return total;
  },
  findDishById(dish){

    return (dishInList)=>
    {
        return (dishInList.id===dish.id);
    }
  }
}
  export {handleHelper};
