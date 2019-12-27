import React, { Component ,Fragment} from "react";
import './style.css'
class Toggle extends Component{
    constructor(props){
        super(props);
        this.state={
            show:true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return(
            <Fragment>
                <div className={this.state.show?'show':'hide'}>toggle hello</div>
                <button onClick={this.handleClick}>toggle</button>
            </Fragment>
        )
    }

    handleClick(){
        this.setState((prevState)=>({
            show:!prevState.show
        }))
    }
}

export default Toggle;