import {combineReducers} from "redux";
import {buyItemReducer} from "./productReducers";

 const reducers = combineReducers({
    buyDish:buyItemReducer,
    
  });
  export default reducers;