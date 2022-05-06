
import BUY_DISH from "../constants/actionType";
export function buyItem(){
    return {
     type:BUY_DISH,
     payload: "Thank You for Ordering on Replica Swiggy"
    };
}
export function changeSelectedCategory(category){
    return {
        type:"changeSelectedCategory",
        payload:category
    }
}

