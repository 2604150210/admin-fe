import React from 'react';
import TitlePage from 'component/page-title/index.jsx';

import {Link} from 'react-router-dom';

class ErrorPage extends React.Component{
	render(){
		return (
			<div id="page-wrapper">
				<TitlePage title='出错啦'/>
				<div className="row">
					<div className="col-md-12">
						<span>找不到该路径，</span>
						<Link to='/'>点我返回首页</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default ErrorPage;