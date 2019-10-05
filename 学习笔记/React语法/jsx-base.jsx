import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

// 基础jsx、样式
let style = {
	color: 'r' + 'ed'
}
let jsx = <div className="jsx" style={style}>jsx...</div>;

ReactDOM.render(
	jsx, 
	document.getElementById("app")
);


// 数据逻辑处理
let name = "JAL";
let names = ["Jal", "ZJ", "Cathy"];
let flag = false;
let jsx = (
	<div>
		{/* 变量的使用 */}
		<p> I am {name}</p>
		{/* 条件判断 */}
		{
			flag ? <p>I am {name}</p> : <p>I am not {name}</p>
		}
		{/* 数组循环 */}
		{
			names.map((name, key) => <p key={key}>Hello, I am {name}</p>)
		}
	</div>
);

ReactDOM.render(
	jsx, 
	document.getElementById("app")
);