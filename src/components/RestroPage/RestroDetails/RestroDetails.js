import React, { Component } from "react";
// import {defaultMemoize} from 'reselect'
import "./RestroDetails.css"
import listOfDishes from "./constants/restroDetails.list"
import Menu from "./Menu"
import {handleHelper} from './handleHelper'
const ENUM={
  DISH_LIST:listOfDishes
}
 class RestroDetails extends Component {
  
    constructor(){
        super();
        this.handleClick=this.handleClick.bind(this);
        this.cartRender=this.cartRender.bind(this);
        this.state=
        {
            cart: [],
            dishList: ENUM.DISH_LIST
        }
    }
  
  handleClick(detail)
  {
    console.log(this.findDishById);
    let newCart=handleHelper.handleClickHepler(detail,this.state.cart);
    
    this.setState({
      cart:newCart
    })

  }
  
  cartRender(dish)
  {
    
    let cartDish=((ENUM.DISH_LIST).find(handleHelper.findDishById(dish)));
    console.log(cartDish);
    return (
      <div>
        <br/>
        <li>{`${dish.quantity}  ${cartDish.details.name}`}</li>
        <h4>Subtotal</h4>  {`Rs. ${cartDish.details.price*dish.quantity}`}

      </div>
    
      );
  }
  
  
  render() {
    // defaultMemoize(this.calculateTotal)
    let total = handleHelper.calculateTotal(this.state.cart);
    return (

      <div className="restrolists-main">

          <Menu dishList={ENUM.DISH_LIST} handleClick={this.handleClick}/>

     <div className="cart">
      <h1>Cart</h1>
      <p>{this.state.cart.length} Item</p>
      <ul>
        {this.state.cart.map(this.cartRender)}
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
