
import {connect} from "react-redux";
import { buyItem } from "../../redux/action/productAction";
import store from "../../redux/store";
import {useSelector,useDispatch} from  "react-redux"

function ThankYou(){
   const myState= useSelector((state)=> state.buyDish.value)
   const dispatch= useDispatch();
   dispatch(buyItem());
   console.log(myState);
   return <h1>{myState}</h1>
}
export default ThankYou;