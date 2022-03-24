import React, { Component } from "react";
import RestroDEtailsHelper from "./"


 class RestroDetails extends Component {
    constructor(){
        this.state={
            restro_dishes:[
                {
                    id: 1,
                    details: {
                      Name: "Veg Pizza",
                      Description:
                        "Italian Dish",
                      Price: "Rs 200"
                      
                    }
                  },
                  {
                    id: 2,
                    details: {
                      Name: "Noodle",
                      Description:
                        "Chinese",
                      Price: "Rs 40"
                      
                    }
                  },
                  {
                    id: 3,
                    details: {
                      Name: "Samosa",
                      Description:
                        "Allo Stuffed Dish",
                      Price: "Rs 40"
                      
                    },
                  },
            ]
        }
    }
    restroDetails(){
        
    }
  render() {
    return (
        {this.state.restro_dishes.map((dish) => {
            return (
              <RestroDetailList
                key={dish.id}
                details={dish.details}
              
              />
            );
          })}
    );
  }
}

export default RestroDetails;
