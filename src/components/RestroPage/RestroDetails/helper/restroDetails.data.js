import DISH_LIST from "../constants/restroDetails.list"


export function getDishes(){
    return new Promise(function(resolve,reject){

        resolve(DISH_LIST);
    })
}