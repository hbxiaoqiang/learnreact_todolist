import React, {Component} from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
        //this.handleClickDel = this.handleClickDel.bind(this); 麻烦了 没有必要在声明一个函数来操作点击，直接()=>箭头函数表达式操作
    }

    render(){
        return (<li
            onClick={()=>this.props.handleDel(this.props.index)}
            >{this.props.content}</li>)
    }

    // handleClickDel(index){
    //     (index)
    // }
}

export default TodoItem