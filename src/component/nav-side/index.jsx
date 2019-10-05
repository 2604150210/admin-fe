import React from 'react';
import {Link, NavLink} from 'react-router-dom';
class NavSide extends React.Component{
	constructor(props){
		super(props);
        this.state = {
            navSideData: [
                {
                    to: '/product',
                    name: '商品',
                    logo: 'fa fa-list',
                    list:[
                        {
                            to: '/product',
                            name: '商品管理',
                        },{
                            to: '/product-category',
                            name: '品类管理',
                        },
                    ]
                },
                {
                    to: '/order',
                    name: '订单',
                    logo: 'fa fa-check-square',
                    list:[
                        {
                            to: '/order',
                            name: '订单管理',
                        },
                    ]
                },
                {
                    to: '/user',
                    name: '用户',
                    logo: 'fa fa-user',
                    list:[
                        {
                            to: '/user',
                            name: '用户管理',
                        },
                    ]
                },
            ]
        }
	}
	render(){
		return (
           <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav">
                        <li>
                            <NavLink exact to="/" activeClassName='active-menu'>
                               <i className="fa fa-dashcube"></i>
                               <span>首页</span>
                            </NavLink>
                        </li>
                        {
                            this.state.navSideData.map((item, key1) => (
                                <li className='active' key={key1}>
                                    <Link to={item.to}>
                                        <i className={item.logo}></i>
                                         <span>{item.name}</span>
                                         <span className="fa arrow"></span>
                                    </Link>
                                    <ul className="nav nav-second-level collapse in">
                                        {
                                            item.list.map((val, key2) => (
                                                <li key={key2}>
                                                    <NavLink to={val.to} activeClassName='active-menu'>{val.name}</NavLink>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>         
		);
	}
}
export default NavSide;