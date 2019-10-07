import React from 'react';
import TitlePage from 'component/page-title/index.jsx';
import {Link} from 'react-router-dom';
import Product from 'service/product-service.jsx';
import MUtil from 'util/mm.jsx';
import Pagination from 'util/pagination/index.jsx';
import TableList from 'util/table-list/index.jsx';
import ListSearch from './index-list-search.jsx';
import './index.scss';
const _mm = new MUtil();
const _product = new Product();

class ProductList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			list: [],
			pageNum: 1,
			listType: 'list',
		}
	}
	componentDidMount(){
		this.loadProductList();
	}
	loadProductList(){
		let listParam = {
			pageNum: this.state.pageNum,
			listType: this.state.listType,
			searchType: this.state.searchType,
			searchKeyword: this.state.searchKeyword,
		};
		_product.getProductList(listParam).then(res => {
			this.setState(res);
		}, errMsg => {
			this.setState({
				list: [],
			})
			_mm.errorTips(errMsg);
		});
	}
	// 搜索
	onSearch(searchType, searchKeyword){
		let listType = searchKeyword === '' ? 'list': 'search';
		this.setState({
			listType: listType,
			pageNum: 1,
			searchType: searchType,
			searchKeyword: searchKeyword,
		}, () => {
			this.loadProductList();
		});
	}
	// 当页数发生变化
	onPageNumChange(pageNum){
		this.setState({
			pageNum: pageNum
		}, () => {
			this.loadProductList()
		})
	}
	// 改变商品状态： 上架、下架
	onSetProductStatus(e, productId, currentStatus){
		let newStatus = currentStatus == 1? 2: 1;
		let confirmTips = currentStatus == 1 ? '确定要下架该商品？': '确定要上架该商品？';
		if(window.confirm(confirmTips)){
			_product.setProductStatus({
				productId: productId,
				status: newStatus,
			}).then(res => {
				_mm.successTips(res);
				this.loadProductList();
			}, errMsg => {
				_mm.errorTips(errMsg);
			});
		}
	}
	render(){
		let tableHeads = [
			{name: '商品ID', width: '10%'},
			{name: '商品信息', width: '50%'},
			{name: '价格', width: '10%'},
			{name: '状态', width: '15%'},
			{name: '操作', width: '15%'}
		];
		return (
			<div id="page-wrapper">
				<TitlePage title='用户列表'/>
				<ListSearch onSearch={(searchType, searchkeyword) => {this.onSearch(searchType, searchkeyword)}}/>
				<TableList tableHeads={tableHeads}>
					{
						this.state.list.map( (product, index) => 
							<tr key={index}>
								<td>{product.id}</td>
								<td>
									<p>{product.name}</p>
									<p>{product.subtitle}</p>
								</td>
								<td>￥{product.price}</td>
								<td>
									<p>{product.status==1 ? '在售': '已下架'}</p>
									<button className='btn btn-warning btn-xs' onClick={(e) => {this.onSetProductStatus(e, product.id, product.status)}}>{product.status==1 ? '下架': '上架'}</button>
								</td>
								<td>
									<Link className='opear' to={`/product/detail/${product.id}`}>详情</Link>
									<Link className='opear' to={`/product/save/${product.id}`}>编辑</Link>
								</td>
							</tr>
						)
					}
				</TableList>
				<Pagination current={this.state.pageNum} 
					total={this.state.total} 
					onChange={page => this.onPageNumChange(page)}/>
			</div>
		);
	}
}
export default ProductList;