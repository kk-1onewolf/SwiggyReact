import React,{Component} from 'react'

class Button extends Component{

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
export default Button