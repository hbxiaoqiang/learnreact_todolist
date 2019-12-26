import React, { Component, Fragment } from 'react';
import './style.css'
import TodoItem from './TodoItem.js'
// 一个组件返回的内容必须有一个容器包含,但如果有需求不希望包含的容器标签输出到html 16的版本t提供了一个占位符 Fragment
// react 响应式框架
class Todolist extends Component {
    constructor(props){//最优先执行的函数 ，构造函数
        super(props) // super 调用父类函数 接收参数
        this.state = {
            inputValue:'hello!!',
            list:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickDel = this.handleClickDel.bind(this);
    }

    handleInputChange(e){
        console.log(e.target.value)
        //this.state.inputValue = e.target.value 改变不能这么写，
        //1，this指向有问题，这个样子this指向的是undfinde,需要改变指向
        //2，react想直接改变状态，不能直接改state的值，规定的，需用方法 setState()
        this.setState({
            inputValue:e.target.value
        })
    }

    handleClickAdd(e){
        if(!this.state.inputValue) return
        this.setState(
            {
                list:[...this.state.list,this.state.inputValue], // ... es6扩展运算符，将数组转化为逗号分隔
                inputValue:"" // 同时清空填写内容
            }
        )
    }

    handleClickDel(index){
        //react 有个imutable ,state 不能直接做任何改变，所以不能直接用 this.state.list(index,1)直接删除数组，虽然不报错，但是可能会影响后面的数据
        const list = [...this.state.list];
        alert(index)
        list.splice(index,1);
        this.setState({
            list:list
        })
    }

    render() {
        return (
            //<div>
            <Fragment>
                <div>
                    <label htmlFor='insertArea'>输入</label>
                    <input id='insertArea' className='input' value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleClickAdd}>提交</button>
                </div>
                <ul>
                   {
                       this.state.list.map((item,index)=>{
                            return (
                                <Fragment key={index}>
                                    <TodoItem
                                     content={item}
                                     index={index}
                                     handleDel={this.handleClickDel}
                                     />
                                    {/*
                                        <li
                                        key={index}
                                        onClick={this.handleClickDel.bind(index)}
                                        >{item}</li>
                                    */}
                                </Fragment>
                               
                            )
                       })
                   }
                </ul>
                {/*
                    写样式的类不能用html class ，要使用className 代替，原因class在js中有其他含义
                    //jsx中使用js表达式或者变量需要添加{} 如 {this.state.inputValue}
                    // 循环li 的时候需要加一个key值，唯一性 ，不加会报警告，暂时先使用index
                    // 如果不需要转义 ，希望直接显示html 可以 使用属性 dangerouslySetInnerHTML={{__html:item}}
                    // 如果对label标签 使用for定位input光标，不能直接使用for 原因js for是循环的意思，要用htmlFor
                */}
            </Fragment>
            //</div>
            
            
        )
    }
}

export default Todolist;