import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tips from '../Tips';
import Loading from '../Loading';
import action from '../../actions';
import './index.less';

class Find extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showCancel: false,
        hotOrSearchOrSong: 'hot',
        delBtn: false,
        placeholder: '搜索歌曲',
        inputValue: '',
        historyList: this.props.state.historyList || [],
      }
      this.handleSearch = (item) => {
        this.props.actions.addHistory(item);
        this.setState({
          hotOrSearchOrSong: 'song'
        })
        this.props.actions.searchSongs(item);
      }
      this.handleFocus = (e) => {
        this.setState({
          showCancel: true,
          hotOrSearchOrSong: 'search',
          placeholder: ''
        })
      }
      this.handleBlur = () => {
        this.setState({
          placeholder: '搜索歌曲'
        })
      }
      this.handleOnChange= () => {
        if(this.refs.searchInput.value){
          this.setState({
            inputValue: this.refs.searchInput.value,
            delBtn: true
          })
        }else{
          this.setState({
            inputValue: this.refs.searchInput.value,            
            delBtn: false
          })
        }
      }
      this.handleCancel = (e) => {
        this.setState({
          showCancel: false,
          hotOrSearchOrSong: 'hot'
        })
      }
      this.handleDel = (index) => {
        if(index === 'all') {
          this.props.actions.delHistory('all');
        }else {
          this.props.actions.delHistory(index);
        }
      }
      this.handleEmpty = () => {
        this.setState({
          inputValue:'',
          delBtn: false
        })
      }
    }
    componentDidMount() {
      fetch('/api/hot')
        .then(res => {
            const _this = this;
            if(res.ok) {
                res.json().then(function(data) {
                  _this.props.actions.findHot(data);
                });
            }
        }).catch(e => {
            new Error(e);
        });
    }
    render() {
        let content = null;
        const status = this.state.hotOrSearchOrSong;
        if(status === 'hot'){
          content = <Hot {...this.props} handleSearch={this.handleSearch}/>;
        }else if(status === 'search'){
          content = <SearchList {...this.props} handleDel={this.handleDel}/>;
        }else if(status === 'song'){
          content = <SongsItem {...this.props}/>
        }   
        return (
          <div className="find">
              <div className="search-input">
                  <div className={this.state.showCancel ? 'input input-focus' : 'input'}>
                      <i className="iconfont icon-search"></i>
                      <input type="text" ref="searchInput" onFocus={this.handleFocus} onChange={this.handleOnChange} placeholder={this.state.placeholder} value={this.state.inputValue}></input>
                      {this.state.delBtn ? <i className="iconfont icon-del" onClick={this.handleEmpty}></i> : null}
                  </div>
                  {this.state.showCancel ?  <span className="cancel-btn" onClick={this.handleCancel}>取消</span> : null}
              </div>
              {content}
          </div>
        );
    }
}

class Hot extends Component{
  render() {
      return (
        <div  className="hot">
          热门搜索
            <div className="keywords">
              {this.props.state.hotList && this.props.state.hotList.map((item, index)=>{
                return <div key={index} onClick={() => this.props.handleSearch(item)} className="keyword">{item}</div>
              })}
            </div>
        </div>
    )
  }
  
}

class SearchList extends Component{
    render() {
        return (
          <div className="search-list" >
              {this.props.state.historyList && this.props.state.historyList.map((item, index)=>{
                return <HistoryItem key={index} name={item} index={index} {...this.props} />
              }) }
              <Tips tips="清除搜索记录~" onClick={() => this.props.handleDel('all')}/>
          </div>
        );
    }
}

class HistoryItem extends Component{
  render(){
    const {name, index} = this.props;
    return (
      <div className="history">
          <div className="icon"><i className="iconfont icon-history"></i></div>
          <div className="word">{name}</div>
          <i className="icon iconfont icon-del" onClick={() => this.props.handleDel(index)}></i>
      </div>
    );
  }
}

class SongsItem extends Component{
    render() {
      const {isFetching} = this.props.state;
      return (
        <div>
          <Loading loadAnimation={isFetching} loadMsg="正在加载..."/>
          <div className="music">
              <i className="iconfont icon-music"></i>
              <div className="music-info">
                <div className="music-name"></div>
                <div className="music-singer"></div>
                <i className="iconfont icon-listening"></i>
              </div>  
          </div>
          <Tips tips="没有更多歌曲了~"/>
        </div>
      );
    }
}
export default connect(
  state => {
    return {state: state.findHot}
  },
  dispatch => {
    return {actions: bindActionCreators(action, dispatch)}
  }
)(Find);
