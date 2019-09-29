import React from 'react';

import PageTitle from 'component/page-title/index.jsx';

class Home extends React.Component{
	render(){
		return ( 
			<div id="page-wrapper">
				<PageTitle title='首页'/>
				<div className="row">
					<div className="col-xs-12">
						body
					</div>
				</div>
			</div>
		);
	}
}

export default Home;