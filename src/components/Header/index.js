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
                    <div className="item">
                        <NavLink to="/music-list">我的</NavLink>
                    </div>
                    <div className="item">
                        <NavLink to="/find">发现</NavLink>
                    </div>
                    <div className="item">
                        <NavLink to="/social">一个</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
