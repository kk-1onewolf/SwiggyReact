import BUY_DISH from "../constants/actionType"
const initialState = {
  value: "Initial",
  categorySelected:"indian"
};
export const buyItemReducer=(state=initialState,action)=>{
    switch (action.type) {
        case BUY_DISH:
          return { ...state, value: action.payload};
        case "indian":
          return {...state,categorySelected:action.payload};
        case "chinese":
            return {...state,categorySelected:action.payload};
        case "italian":
              return {...state,categorySelected:action.payload};
        default:
          return state;
      }
}

