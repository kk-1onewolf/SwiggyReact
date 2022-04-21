//import { actionType } from "../constants/actionType";
import BUY_DISH from "../constants/actionType";
export function buyItem(){
    return {
     type:BUY_DISH,
     payload: "Thank You for Ordering on Replica Swiggy"
    };
}
export function indian(){
    return {
     type:"indian",
     payload: "indian"
    };
}
export function chinese(){
    return {
     type:"chinese",
     payload: "chinese"
    };
}
export function italian(){
    return {
     type:"italian",
     payload: "italian"
    };
}

