import React,{Component} from 'react'

class AddDishButton extends Component{

    constructor(props){
        super(props)

    }
    handleButtonClick=()=>{
        const {dish,getUpdatedCartValue}=this.props;
        
        return getUpdatedCartValue(dish.details);
    }
    render(){
        return(
            <button onClick={this.handleButtonClick}>Add</button>
        )
    }
}
export default AddDishButton