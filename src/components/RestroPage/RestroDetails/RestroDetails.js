import React, { Component } from "react";
import "./RestroDetails.css"
 class RestroDetails extends Component {
    constructor(){
        super();
        this.state={
            cart: [],
            dishList:[
                {
                    id: 1,
                    details: {
                      Quantity:0,
                      Name: "Veg Pizza",
                      Image:"https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ=",
                      Description:
                        "Italian Dish",
                      Price: 200
                    }
                  },
                  {
                    
                    id: 2,
                    details: {
                      Quantity:0,
                      Name: "Noodle",
                      Image:"https://images.unsplash.com/photo-1600490036275-35f5f1656861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm9vZGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                      Description:
                        "Chinese",
                      Price: 80
                      
                    }
                  },
                  {
                    id: 3,
                    details: {
                      Quantity:0,
                      Name: "Samosa",
                      Image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2Ftb3NhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                      Description:
                        "Allo Stuffed Dish",
                      Price: 40
                     
                    },
                  },
            ]
        }
    }
      
  buttonClicked(detail){
    let newCart=this.state.cart;
    if(detail.Quantity === 0){
    detail.Quantity=detail.Quantity+1;
    newCart.push(detail);
    }
    else
   {
      newCart.map((current)=>{
        if(current.Name === detail.Name){
          current.Quantity=current.Quantity+1;
        }
      })
   }
   
    this.setState({
      cart:newCart
    })

  }
  render() {
      let total = 0;
      this.state.cart.forEach((dishes) => {
        total += dishes.Price*dishes.Quantity;
        
      });
    
    return (

      <div className="restrolists-main">
        {this.state.dishList.map((dish) => {
            return (
              <div className="restrodetaillist">
                <div className="restrodetaillist-info">
                <h3>{dish.details.Name}</h3>
                <p>{"Rs. "+dish.details.Price}</p>
                <p>{dish.details.Description}</p>
                <img className="image-here"  src={dish.details.Image}/>
                </div>
                <button className="Button" onClick={()=> {
                  this.buttonClicked(dish.details)
                }}>Add</button>
              </div>

            );
          })}

     <div className="cart">
      <h1>Cart</h1>
      <p>{this.state.cart.length} Item</p>
      <ul>
        {this.state.cart.map((dishes) => {
          return (
            <div>
              <br/>
              <li>{dishes.Quantity+" "+dishes.Name}</li>
              <h4>Subtotal</h4>  { " Rs. "+dishes.Price*dishes.Quantity}

            </div>
          
            );
        })}
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
