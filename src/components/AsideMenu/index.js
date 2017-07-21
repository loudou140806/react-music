import React, { Component } from 'react';
import './index.less';

class AsideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true,
        }
        this.shouAsideMenu = () => {
            alert('showAside');
        }
    }
  render() {
    return (
        <div  className="aside-menu">
            <i onClick={this.showAsideMenu} className="back"></i>
            <div className="aside">
                <div style={{'backgroundColor': 'skinColor'}} className="info">
                    <a href="http://loumingjie.cn/" className="avatar">
                        <img src="http://loumingjie.cn/resume/image/photo1.jpg" alt="loumingjie.cn"></img>
                    </a>
                    <div className="about">
                        <span className="name"><a href="http://loumingjie.cn/">Frank</a></span>
                        <span className="level">Lv100</span>
                        <span className="sign">
                        <i></i>
                        {this.state.isSignIn ? '已签到' : '签到'}
                        </span>
                    </div>
                </div>
                <div className="settings">
                <div className="content">
                    <ul>
                        <li><i className="iconfont icon-email"></i>我的消息</li>
                        <li><i className="iconfont icon-huiyuan"></i>会员中心</li>
                        <li><i className="iconfont icon-shangcheng"></i>商城</li>
                        <li><i className="iconfont icon-online-music"></i>在线听歌免流量</li>
                    </ul>
                    <ul>
                        <li><i className="iconfont icon-friend"></i>我的好友</li>
                        <li><i className="iconfont icon-near"></i>附近的人</li>
                    </ul>
                    <ul>
                        <li><i className="iconfont icon-skin"></i>个性换肤</li>
                        <li onClick={this.showAbout}><i className="iconfont icon-about"></i>关于</li>
                    </ul>
                    <div className="back">
                        <i className="iconfont icon-back"></i>
                    </div>
                </div>

                </div>
            </div>
            <div className="mask"></div>
        </div>
    );
  }
}

export default AsideMenu;
