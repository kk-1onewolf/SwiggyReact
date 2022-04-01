import React, { Component } from "react";
import "./RestroDetails.css"
import list from "./constants/details.list"
import Menu from "./Menu"
 class RestroDetails extends Component {
  
    constructor(){
        super();
        this.state=
        {
            cart: [],
            dishList: list
        }
    }
  updateDishInCart(detailCopy){
   
    return (current)=>{
      if(current.name === detailCopy.name)
      {
        current.quantity=current.quantity+1;
      }
    }
     
    
  }
  
  isPresentInCart(detail,isInCart){
      return (dish)=>{
        if(detail.name===dish.name){
            isInCart.isTrue=1;
        }
      }
  }
  handleClickLogic(detail,newCart){
   
    let detailCopy={...detail};
    let isInCart={
      isTrue:0
    };
    newCart.map(this.isPresentInCart(detail,isInCart));
    console.log(isInCart);
    if(isInCart.isTrue===0)
    {
     detailCopy.quantity=1;
     newCart.push(detailCopy);
    }
    else
   {
      newCart.map(this.updateDishInCart(detailCopy));
   }
    
  }


  handleClick(detail)
  {
    let newCart=[...(this.state.cart)];

    this.handleClickLogic(detail,newCart);
    
    this.setState({
      cart:newCart
    })

  }
  
  
  cartInit(dish){
    return (
      <div>
        <br/>
        <li>{`${dish.quantity}  ${dish.name}`}</li>
        <h4>Subtotal</h4>  {`Rs. ${dish.price*dish.quantity}`}

      </div>
    
      );
  }
  calculateTotal(){
    let total=0;
    this.state.cart.map((dishes)=>{
      total += dishes.price*dishes.quantity;
    });
    return total;
  }
  render() {
    
    let total = this.calculateTotal();
    return (

      <div className="restrolists-main">

          <Menu dishList={list} handleClick={this.handleClick.bind(this)}/>

     <div className="cart">
      <h1>Cart</h1>
      <p>{this.state.cart.length} Item</p>
      <ul>
        {this.state.cart.map(this.cartInit)}
      </ul>
      <h2 className="Total">
        Total
      </h2>
      <p> {"Rs "+total}</p>
     </div>
   </div>
   
    );
}
 }

export default RestroDetails;
