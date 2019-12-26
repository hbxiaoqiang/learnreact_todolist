import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
//JSX语法，如果要自己创建组件 首写字母必须大写，小写首字母jsx认为是html标签
ReactDOM.render(<Todolist />, document.getElementById('root'));

/*
//todolist衍生思考
1，声明式开发 ，
   直接操作dom成为命令式开发，比如大部分代码在做dom操作，比如jq 每一步都关心dom操作
   react算是声明式开发，指操作数据为主，关注数据的变化，不直接操作dom，可以帮忙节约dom的操作代码

2，react 也可以其他框架并存 比如jq 
    ReactDOM.render(<Todolist />, document.getElementById('root'));相当于当前react指复制id等于root的内容，你其他框架可以去操作root外部，不过一般没必要这么做

3 组件化
    首字母大写的是组件 在结构上是个树状，父组件向子组件传值，子组件想操作父组件传递的方法
    
4 单向数据流
    state不能直接修改是个只读的数据， 同时父组件是todolist 向子组件传值的时候，最好不要直接传state的值，避免子组件直接修改
    主要是因为state是可能会别很多组件共用，一旦改了，所有组件都改了
    如果出错，定位错误可能会比较麻烦，state的值值在当前组件可以调用state修改的化，错误只会在当前组件上，定位好找的多
    
 5 视图层框架
    一般想react项目会有很多组件，形成一个树状结构 ，父向子传值，子反用父给的方法修改父，如果树状结构越大，跨分支操作就非常困难
    所有，react只定义自己为视图层框架，不是什么问题都解决，只解决数据和页面渲染上的问题，
    如果组件的出现复杂的传值，react不提供方法，交给插件做 如 Redux

 6 函数式编程
    */
