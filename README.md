# admin-fe
慕课网购买的视频课项目练习： 实战\React16+React-Router4 从零打造企业级电商后台管理系统 

## 一、 React生命周期节点

### 1. 四大阶段
+ Mounting: 挂载阶段
+ Updating: 运行阶段
+ Unmounting: 卸载阶段
+ Error Handling: 错误处理阶段

### 2. 七大生命周期函数
1. 组件将要加载
```js
componentWillMount(){
	console.log('componentWillMount');
}
```

2. 组件加载完成
```js
componentDidMount(){
	console.log('componentDidMount');
}
```

3. 将要接收父组件传来的props
```js
componentWillReceivePros(){
	console.log("componentWillReceivePros")
}
```

4. 子组件是不是应该更新
```js
shouldComponentUpdate(){
	console.log("shouldComponentUpdate")
	return true;
}
```

5. 组件将要更新
```js
componentWillUpdate(){
	console.log("componentWillUpdate");
}
```
6. 组件更新完成
```js
componentDidUpdate(){
	console.log("componentDitUpdate");
}
```

7. 组件将要销毁
```js
componentWillUnmount(){
	console.log("componentWillUnmount")
}
```

## 二、Router原理
历史、跳转、事件

### 1.常见Router
+ 页面Router
真正的页面跳转，重新加载，回退也是重新加载
window.location.href="https://www.baidu.com"
+ Hash Router
页面没有发生变化，只是哈希发生了变化，单页应用中的最早路由方式
window.location.href="#test"
window.onhashchange=function(){console.log("current hash:", window.location.hash)}// 查看hash
+ H5 Router
在history对象里提供了方法，能操作整个路径，既能操纵路径，又能操作哈希
跳哈希：history.pushState('test','title','#test')
跳路径（推进一个历史）：history.pushState('test','title','/user')
h5路由只处理后退，不处理前进：
window.onpopstate = function(e){console.log("h5 router change", e.state)}
替换当前路由：history.replaceState('test',null,'index/test')

### 2. React-Router
React官方提供的路由插件，单页应用必备。适用版本，react-Router-dom@v4.2.2
动态路由，纯react组件
+ <BrowserRouter> / <HashRouter>, 路由方式
+ <Route>, 路由规则
+ <Switch>, 路由选项
+ <Link/> / <NavLink>, 跳转导航
+ <Redirect>, 自动跳转

### 3. 安装react-router-dom:
`yarn add react-router-dom@4.2.2`

## 三、React数据管理
### 1. 依靠状态提升来和兄弟元素进行数据交互
### 2. 通过发布订阅模式做数据交互
### 3. Redux等数据管理工具
单项数据流，根组件Store、state管家reducer

## 四、通用部分内容
### 1. 通用项目布局的开发
### 2. 通用头部导航的开发
### 3. 通用侧边导航的开发
首页

商品
--商品管理
--品类管理

订单
--订单管理

用户
--用户管理
### 4. 功能区通用标题的开发

## 五、基础功能模块的开发
### 1. 登录页
+ 用户登录
+ 用户信息本地存储
+ 登录完跳转回上一级

### 2. 登录状态管理
+ 显示登录状态
+ 退出登录

### 3. 用户列表页
+ 用户列表
+ 分页功能的封装

### 4. 首页的开发
+ 数据统计展示

### 5. 错误提示页
+ 错误提示
+ 引导回到首页

## 六、产品页面的开发

+ 封装了表格TableList
+ 封装了二级联动的下拉选择组件
+ 文件上传组件，React15，与项目使用的React16版本冲突，如何将上传组件的源代码放到自己的项目中。
+ 富文本框。JQuery组件，如何在React中使用

## 七、品类
### 1. 品类列表页的开发
+ 品类列表
+ 子品类路由的处理
+ 修改品类名称

## 2. 添加品类页面的开发
+ 渲染品类信息
+ 添加品类

## 八、订单
### 1. 订单列表页
+ 订单列表
+ 按订单号搜索

### 2. 订单详情页
+ 详情信息
+ 发货操作
