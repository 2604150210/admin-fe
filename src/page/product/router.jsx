import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ProductList from 'page/product/index/index.jsx';
import ProductSave from 'page/product/index/save.jsx';
import ProductDetail from 'page/product/index/detail.jsx';
class ProductRouter extends React.Component{
	render(){
		return (
			<Switch>
				<Route path='/product/index' component={ProductList}/>
				<Route path='/product/save/:pid?' component={ProductSave}/>
				<Route path='/product/detail/:pid' component={ProductDetail}/>
				<Redirect exact from='/product' to='/product/index'/>
			</Switch>
		);
	}
}
export default ProductRouter;