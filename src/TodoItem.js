import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 用于验证 接收数据的类型，仅在开发模式下会警告错误，生产模式是不执行的，一般开发的时候尽量还是加上，防止数据异常

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        //this.handleClickDel = this.handleClickDel.bind(this); 麻烦了 没有必要在声明一个函数来操作点击，直接()=>箭头函数表达式操作
    }

/*    
    componentWillReceiveProps(){
        //相对于父组件的子组件有的生命周期函数
        //接收到父组件的Props值的时候，只有父的render被重新执行，就会被执行
        console.log('componentWillReceiveProps')
    }

    componentWillUnmount(){
        //组件被移除的时候
        console.log('componentWillUnmount')
    }
    */

    shouldComponentUpdate(nextProps,nextState){
        //shouldComponentUpdate,接收两个参数，当前已经是的Props，和State参数
        // 因为 当前组件相对于父组件的render执行的时候会执行子组件的render，这个实际上有可能子组件没有变化被render，对性能很少影响，需要排除这种情况，
        return (nextProps.content !== this.props.content);
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