import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.less';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toSearch = () => {
            alert('tosearch');
        }
    }
    render() {
        return (
            <div style={{'backgroundColor':'skinColor'}} className="header">
                <div className="name">
                    <span onClick={()=>{this.showAsideMenu(true)}} className="func"><i className="iconfont icon-func"></i></span>
                    <p>云音乐</p>
                    <span className="search"><i onClick={this.toSearch} className="iconfont icon-search"></i></span>
                </div>
                <div className="tab">
                    <NavLink to="/music-list" className="item" activeClassName="activeTab">我的</NavLink>
                    <NavLink to="/find" className="item" activeClassName="activeTab">发现</NavLink>
                    <NavLink to="/social" className="item" activeClassName="activeTab">一个</NavLink>
                </div>
            </div>
        );
    }
}

export default Header;
