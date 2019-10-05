// 页面路由
window.location.href = 'http://www.baidu.com'
history.back();

// hash 路由
window.location = '#hash';
window.onhashchange = function function_name(argument) {
	console.log('current hash:', window.location.hash);
}

// h5 路由
// 推进一个状态
history.pushState('name', 'title', '/path');
// 替换一个路由
history.replaceState('name', 'title', '/path');
// popstate
window.onpopstate = function(){
	console.log(window.location.href);
	console.log(window.location.pathname);
	console.log(window.location.hash);
	console.log(window.location.search);
}


// react-router
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
class A extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<Switch>
					 <Route exact path={`${this.props.match.path}`}
					 render={(route)=>{
						return <p>当前组件是不带参数的A, 参数是{route.match.path}</p>
					 }}/>
					 <Route path={`${this.props.match.path}/sub`}
					 render={(route)=>{
						return <p>当前组件sub</p>
					 }}/>
					 <Route path={`${this.props.match.path}/:id`}
					 render={(route)=>{
						return <p>当前组件是带参数的A, 参数是{route.match.path}</p>
					 }}/>
				</Switch>
			</div>
		);
	}
}
class B extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		<div>
			<p>Component B</p>
		</div>
		);
	}
}
class Wrapper extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<Link to='/a'>组件A</Link>
				<br/>
				<Link to='/a/123'>带参数的组件A</Link>
				<br/>
				<Link to='/b'>组件B</Link>
				<br/>
				<Link to='/a/sub'>/a/sub</Link>
				{this.props.children}
			</div>
		);
	}
}
ReactDOM.render(
	<Router>
		<Wrapper>
			<Route path="/a" component={A}/>
			<Route path="/b" component={B}/>
		</Wrapper>
	</Router>,
	document.getElementById("app")
);