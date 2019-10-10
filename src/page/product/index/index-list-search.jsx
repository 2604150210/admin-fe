import React from 'react';
class ListSearch extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			searchType: 'productId', // productId/productName
			searchKeyword: ''
		}
	}
	// 数据变化的时候
	onValueChange(e){
		this.setState({
			[e.target.name]: e.target.value.trim()
		})
	}
	// 点击搜索按钮的时候
	onSearch(){
		this.props.onSearch(this.state.searchType, this.state.searchKeyword);
	}
	onSearchKeywordKeyUp(e){
		if(e.keyCode === 13){
			this.onSearch();
		}
	}
	render(){
		return (
			<div className="row search-wrap">
				<div className="col-md-12">
					<div className="form-inline">
					  <div className="form-group">
					  	<select className="form-control"
					  	name='searchType'
					  	onChange={e => {this.onValueChange(e)}}>
					  		<option value="productId">按商品ID查询</option>
					  		<option value="productName">按商品名称查询</option>
					  	</select>
					  </div>
					  <div className="form-group">
					    <input className="form-control" 
					    placeholder="关键词" 
					    name='searchKeyword'
					    onChange={e => {this.onValueChange(e)}}
					    onKeyUp={e => this.onSearchKeywordKeyUp(e)}/>
					  </div>
					  <button type="button" 
					  className="btn btn-default" 
					  onClick={e => {this.onSearch()}}>搜索</button>
					</div>
				</div>
			</div>
		);
	}
}
export default ListSearch;