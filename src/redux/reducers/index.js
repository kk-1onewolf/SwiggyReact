import {combineReducers} from "redux";
import {updateCategoryReducer} from "./productReducers";

 const reducers = combineReducers({
  updateCategory:updateCategoryReducer,
    
  });
  export default reducers;