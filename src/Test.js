import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Test extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div>
                {this.props.content}
            </div>
        )
        /*
        jsx  -> js对象 -》 真实dom 
        里边的html标签并不是真正的html，其实就是一个模版
        执行的这个模版的是调用的React.createElement方法转化为虚拟dom，然后渲染成真实dom ，如果结构复杂，就不形象了，jsx结构上更清新，方法是
        React.createElement('div',{},this.props.content)
        */
    }
}

Test.propTypes = {
    content:PropTypes.string
}

export default Test