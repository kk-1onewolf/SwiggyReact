import actionType from "../constants/actionType"

const initialState = {
 
  categorySelected:"indian"
};
export const updateCategoryReducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionType.CHANGE_SELECTED_CATEGORY:
          return {...state,categorySelected:action.payload};
        default:
          return state;
      }
}

