import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
//JSX语法，如果要自己创建组件 首写字母必须大写，小写首字母jsx认为是html标签
ReactDOM.render(<Todolist />, document.getElementById('root'));

/*
//todolist衍生思考总结
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


 7 react 渲染流程，当 state 或 props 改变的时候 render()就会被执行一次,当父组件的render执行的时候，其子组件的render也会被执行
    
 8 虚拟dom 的概念 简单说就 一个 数组结构js对象来描述真实dom ，核心操作dom会比操作js对象更消耗性能
    1，state 数据
    2，jsx 模版
    3，数据 + 模版 结合 生产真实dom显示
    4，state 发生改变
    5，数据 + 模版 结合 生产真实dom显示，替换原来dom
    以上步骤的缺陷 第一次生产一个完成dom，第二又生产一个完整dom 在替换，因为每一次都是完整生产替换，消耗性能
    改5 数据 + 模版 结合 生产真实dom显示，不替换
    6 用新的dom 和 原始dom 对比 找出差异
    7 找出差异 只用新的差异元素进行替换 
    以上 不涉及dom全部的替换，只有局部替换性能可以得以提升，这个类似于ag1的方案，缺陷，消耗了比对的性能，所以性能的提升不太明显
    
   react 中

   1，state 数据
   2，jsx 模版
   3,数据 + 模版 生成虚拟dom
      ['div',{id:'abc'},['span',{},'hello']]
   4，用用虚拟dom 生产真实dom显示
      <div id='abc'><span>hello</span><div>
  
   5 state 发生变化（state 实际是异步的，具体也是为了提升性能，把间隔时间很短的多次state改变操作合并为一个操作 ）
   6 数据+模版 生成新的虚拟dom （极大提升性能，因为js生成js对象性能消耗很小）
   7 比较原始虚拟dom和新的虚拟dom 找到区别 （极大提升性能，js和js对比差异，之前的dom和dom对比，
      差异diff算法把，采用的是同层比对，发现一层之后后面就不比了，如果是数组的话会要求一个每个list有一个key）
   8.直接生成对应dom，改变span中的内容

   虚拟dom的优点
   1 性能提升
   2 跨平台端实现的可能，出现了 react native ；
 */
