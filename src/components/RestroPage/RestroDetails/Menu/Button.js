import React,{Component} from 'react'

class Button extends Component{

    constructor(props){
        super(props)

    }
    handleButtonClick=()=>{
        const {dish,handleClick}=this.props;
        
        return handleClick(dish.details);
    }
    render(){
        return(
            <button onClick={this.handleButtonClick}>Add</button>
        )
    }
}
export default Button