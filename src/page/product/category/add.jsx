import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import Product from 'service/product-service.jsx';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
const _product = new Product();

class CategoryAdd extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			categoryList: [],
			parentId: 0,
			categoryName: ''
		}
	}
	componentDidMount(){
		this.loadCategoryList();
	}
	
	// 加载品类列表,为了显示父品类列表
	loadCategoryList(){
		_product.getCategoryList().then(res => {
			this.setState({
				categoryList: res
			});
		}, errMsg => {
			_mm.errorTips(errMsg);
		});
	}
	onValueChange(e){
		let name = e.target.name,
			value = e.target.value.trim();
		this.setState({
			[name]: value
		})
	}
	onSubmit(e){
		let categoryName = this.state.categoryName.trim();
		// 如果商品品类名称不为空，直接提交数据
		if(categoryName){
			_product.saveCategory({
				parentId: this.state.parentId,
				categoryName: categoryName
			}).then((res) => {
				_mm.successTips(res);
				this.props.history.push('/product-category/index');
			}, errMsg => {
				_mm.errorTips(errMsg);
			})
		}else{
			_mm.errorTips('请输入品类名称');
		}
	}
	render(){
		return (
			<div id="page-wrapper">
				<PageTitle title='品类列表'/>
				<div className="row">
					<div className="col-md-12">
						<div className="form-horizontal">
						  <div className="form-group">
						    <label className="col-md-2 control-label">所属品类</label>
						    <div className="col-md-5">
						      <select name='parentId' 
						      className='form-control'
						      name='parentId'
						      onChange={e => this.onValueChange(e)}>
						      	<option value="0">根品类/</option>
						      	{
						      		this.state.categoryList.map((category, index) => 
						      			<option value={category.id} key={index}>根品类/{category.name}/</option>
						      		)
						      	}
						      </select>
						    </div>
						  </div>
						  <div className="form-group">
						    <label className="col-md-2 control-label">品类名称</label>
						    <div className="col-md-5">
						      <input className="form-control" 
						      placeholder="请输入品类名称"
						      name='categoryName'
						      value={this.state.name}
						      onChange={e => this.onValueChange(e)}/>
						    </div>
						  </div>
						  <div className="form-group">
						    <div className="col-sm-offset-2 col-sm-10">
						      <button type="submit" 
						      className="btn btn-primary"
						      onClick={e => this.onSubmit(e)}>提交</button>
						    </div>
						  </div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CategoryAdd;