import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

// 基础组件写法
function Component(){
	return <h1>Ia am Rosen</h1>
}

class ES6Component extends React.Component{
	render(){
		return <h1>Ia am Rosen in ES6</h1>;
	}
}


ReactDOM.render(
	<div>
		<Component />
		<ES6Component />
	</div>, 
	document.getElementById("app")
);





// state、props的用法
class Component extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		setTimeout(()=>{
			this.setState({
				name: 'Cathy'
			})
		}, 2000);
		return <h1>I am {this.props.name}</h1>;
	}
}

ReactDOM.render(
	<div>
		<Component name="ZJ"/>
	</div>, 
	document.getElementById("app")
);


// 事件处理方式一
import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name: 'jal',
			age: 22,
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.setState({
			age: this.state.age+1
		})
	}
	render(){
		return (
			<div>
				<h1>I am {this.state.name}</h1>
				<p>I am {this.state.age} years old</p>
				<button onClick={this.handleClick}>加一岁</button>
			</div>
		);
	}
}

ReactDOM.render(
	<Component/>,
	document.getElementById("app")
);

// 事件处理方式二
import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name: 'jal',
			age: 22,
		}
	}
	handleClick(){
		this.setState({
			age: this.state.age+1
		})
	}
	onValueChange(e){
		this.setState({
			age: e.target.value
		})
	}
	render(){
		return (
			<div>
				<h1>I am {this.state.name}</h1>
				<p>I am {this.state.age} years old</p>
				<button onClick={(e) => {this.handleClick(e)}}>加一岁</button>
				<input type="text" onChange={(e)=>{this.onValueChange(e)}}/>
			</div>
		);
	}
}

ReactDOM.render(
	<Component/>,
	document.getElementById("app")
);


//组件的两种组合方式
import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name: 'jal',
			age: 22,
		}
	}
	handleClick(){
		this.setState({
			age: this.state.age+1
		})
	}
	onValueChange(e){
		this.setState({
			age: e.target.value
		})
	}
	render(){
		return (
			<div>
				<h1>I am {this.state.name}</h1>
				<p>I am {this.state.age} years old</p>
				<button onClick={(e) => {this.handleClick(e)}}>加一岁</button>
				<input type="text" onChange={(e)=>{this.onValueChange(e)}}/>
			</div>
		);
	}
}

class Title extends React.Component{
	constructor(props){
		super(props);
	}
	render(props){
		return <h1>{this.props.children}</h1>
	}
}
class App extends React.Component{
	render(){
		return(
			<div>
				{/* 容器组件 */}
				<Title>
					<span>App Span</span>
					<a href="">link</a>
				</Title>
				<hr/>
				{/* 单纯组件 */}
				<Component/>				
			</div>
		)
	}
}
ReactDOM.render(
	<App/>,
	document.getElementById("app")
);


// 数据传递和状态提升
import React from 'react';
import ReactDOM from 'react-dom';

class Child1 extends React.Component{
	constructor(props){
		super(props);
	}
	handleClick(){
		this.props.changeChild2Color('red');
	}
	render(){
		return (
			<div>
				<button onClick={(e) => {this.handleClick(e)}}>改变Child2背景颜色</button>
			</div>
		);
	}
}
class Child2 extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div style={{background: this.props.bgColor}}>
				<p>Child2:{this.props.bgColor}</p>
			</div>
		);
	}
}

class Father extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			child2BgColor: "#999",
		}
	}
	onBgColorChange(color){
		this.setState({
			child2BgColor: color
		})
	}
	render(props){
		return (
			<div>
				<Child1 changeChild2Color={(color)=>{this.onBgColorChange(color)}}/>
				<Child2 bgColor={this.state.child2BgColor}/>
			</div>
		);
	}
}
ReactDOM.render(
	<Father/>,
	document.getElementById("app")
);
