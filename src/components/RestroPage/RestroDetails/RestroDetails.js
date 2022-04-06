import React, { Component } from "react";
// import {defaultMemoize} from 'reselect'
import "./RestroDetails.css"
import DISH_LIST from "./constants/restroDetails.list"
import Menu from "./Menu"
import {handleClickHepler,findDishById,calculateTotal} from './helper/restroPage.general'

 class RestroDetails extends Component {
  
    constructor(){
        super();
        this.getUpdatedCartValue=this.getUpdatedCartValue.bind(this);
        this.cartRender=this.cartRender.bind(this);
        this.state=
        {
            cart: [],
            dishList: DISH_LIST
        }
    }
  
  getUpdatedCartValue(detail)
  {
   
    let newCart=handleClickHepler(detail,this.state.cart);
    
    this.setState({
      cart:newCart
    })

  }
  
  cartRender(dish)
  {
    
    let cartDish=((DISH_LIST).find(findDishById(dish)));
   
    return (
      <div>
        <br/>
        <li>{`${dish.quantity}  ${cartDish.details.name}`}</li>
        <h4>Subtotal</h4>  {`Rs. ${cartDish.details.price*dish.quantity}`}

      </div>
    
      );
  }
  
  
  render() {
    
    let total = calculateTotal(this.state.cart);
    return (

      <div className="restrolists-main">

          <Menu dishList={DISH_LIST} getUpdatedCartValue={this.getUpdatedCartValue}/>

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
