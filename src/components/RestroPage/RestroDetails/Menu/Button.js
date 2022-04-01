import React,{Component} from 'react'

class Button extends Component{

    constructor(props){
        super(props)
        
        this.state={
            handleClick: this.props.hadleClick,
            dish: this.props.dish
        }
    }

    handleButtonClick=()=>{
        const {dish,handleClick}=this.props;
         console.log(dish);
        return handleClick(dish.details);
    }
    render(){
       
        return(
            <button onClick={this.handleButtonClick}>Add</button>
        )
    }
}
export default Button