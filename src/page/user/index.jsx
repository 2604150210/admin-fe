import React from 'react';
import TitlePage from 'component/page-title/index.jsx';
import {Link} from 'react-router-dom';
import Pagination from 'util/pagination/index.jsx';
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
			firstLoading: true,
		}
	}
	componentDidMount(){
		this.loadUserList();
	}
	loadUserList(){
		_user.getUserList(this.state.pageNum).then(res => {
			this.setState(res, () => {
				this.setState({firstLoading: false});
			});
		}, errMsg => {
			this.setState({
				list: [],
				firstLoading: false
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
		let listBody = this.state.list.map( (user, index) => 
			<tr key={index}>
				<td>{user.id}</td>
				<td>{user.username}</td>
				<td>{user.email}</td>
				<td>{user.phone}</td>
				<td>{new Date(user.createTime).toLocaleString()}</td>
			</tr>
		);
		let listError = (
			<tr>
				<td colSpan='5' className='text-center'>
					{this.state.firstLoading ? '正在加载...' : '没有找到相应的结果'}
				</td>
			</tr>
		);
		let tableBody = this.state.list.length > 0? listBody: listError;
		return (
			<div id="page-wrapper">
				<TitlePage title='用户列表'/>
				<div className="row">
					<div className="col-md-12">
						<table className='table table-responsive table-hover table-strike'>
							<thead>
								<tr>
									<th>ID</th>
									<th>用户名</th>
									<th>邮箱</th>
									<th>电话</th>
									<th>注册时间</th>
								</tr>
							</thead>
							<tbody>
								{tableBody}
							</tbody>
						</table>
						<Pagination current={this.state.pageNum} 
						total={this.state.total} 
						onChange={page => this.onPageNumChange(page)}/>
					</div>
				</div>
			</div>
		);
	}
}
export default UserList;