import React, { Component } from 'react';
import './index.less';

class Find extends Component {
    constructor(props) {
      super(props);
      this.toSearch = () => {
        alert('toSearch');
      }
    }
    render() {
        return (
          <div className="find">
              <div className="search-input">
                  <div className="input">
                      <i className="iconfont icon-search"></i>
                      <input type="text" placeholder="搜索歌曲"></input>
                      <i className="iconfont icon-cancel"></i>
                      <div className="cancel-btn">取消</div>
                  </div>
              </div>
          {/*<!-- 热门搜索 -->*/}
            <div  className="hot">
              热门搜索
                <div className="keywords">
                  <div onClick={(item) => this.toSearch(item)} className="keyword"></div>
                </div>
            </div>
            <div className="search-list" >
              {/*<!-- 搜索历史 -->*/}
                <div className="history">
                  <div className="icon"><i className="iconfont icon-history"></i></div>
                  <div className="word"></div>
                  <div className="icon"><i className="iconfont icon-del"></i></div>
                </div>
               <div className="tips">清除搜索记录</div>
              <div className="loading"><i className="iconfont icon-loading"></i>搜索中...</div>
                  <div className="music">
                    <div className="iconfont icon-music">
                    </div>
                    <div className="music-info">
                      <div className="music-name"></div>
                      <div className="music-singer"></div>
                      <i className="iconfont icon-listening"></i>
                    </div>
                  </div>
                  <div className="tips">没有更多结果了～</div>
              </div>
          </div>
        );
    }
}

export default Find;
