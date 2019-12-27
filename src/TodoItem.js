import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 用于验证 接收数据的类型，仅在开发模式下会警告错误，生产模式是不执行的，一般开发的时候尽量还是加上，防止数据异常

class TodoItem extends Component {
    constructor(props) {
        super(props);
        //this.handleClickDel = this.handleClickDel.bind(this); 麻烦了 没有必要在声明一个函数来操作点击，直接()=>箭头函数表达式操作
    }

    render() {
        const { handleDel, index, content } = this.props;
        return (
            <li
                onClick={() => handleDel(index)}
            >
                {content}
            </li>
        )
    }

    // handleClickDel(index){
    //     (index)
    // }
}

TodoItem.propTypes = { // PropType 有6大加symbob ，如果必须传的话可以加一个isRequired，js全部数据那些的验证，还有写其他方法验证
    content:PropTypes.string,
    index:PropTypes.number,
    handleDel:PropTypes.func,
    //text:PropTypes.string.isRequired
}

TodoItem.defaultProps = {  //可以设置一些默认值
    //text:'hello , world'
}

export default TodoItem