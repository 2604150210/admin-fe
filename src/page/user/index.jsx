import React from 'react';
import TitlePage from 'component/page-title/index.jsx';
import {Link} from 'react-router-dom';
import Pagination from 'util/pagination/index.jsx';
import TableList from 'util/table-list/index.jsx';
import User from 'service/user-service.jsx';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
const _user = new User();

class UserList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			list: [],
			pageNum: 1,
		}
	}
	componentDidMount(){
		this.loadUserList();
	}
	loadUserList(){
		_user.getUserList(this.state.pageNum).then(res => {
			this.setState(res);
		}, errMsg => {
			this.setState({
				list: [],
			})
			_mm.errorTips(errMsg);
		});
	}
	// 当页数发生变化
	onPageNumChange(pageNum){
		this.setState({
			pageNum: pageNum
		}, () => {
			this.loadUserList()
		})
	}
	render(){
		let tableHeads = ['ID', '用户名', '邮箱', '电话', '注册时间'];
		let listBody = this.state.list.map( (user, index) => 
			<tr key={index}>
				<td>{user.id}</td>
				<td>{user.username}</td>
				<td>{user.email}</td>
				<td>{user.phone}</td>
				<td>{new Date(user.createTime).toLocaleString()}</td>
			</tr>
		);
		return (
			<div id="page-wrapper">
				<TitlePage title='用户列表'/>
				<TableList tableHeads={tableHeads}>
					{listBody}
				</TableList>
				<Pagination current={this.state.pageNum} 
				total={this.state.total} 
				onChange={page => this.onPageNumChange(page)}/>
			
			</div>
		);
	}
}
export default UserList;