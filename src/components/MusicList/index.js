import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import action from '../../actions';
import './index.less';
import Lists from '../../assets/music.json';

class MusicList extends Component {
  render() {
    return (
      <div>
        {Lists.musicData.map((item, index) => {
          return <Item key={index} index={index} name={item.name} src={item.src} imgSrc={item.musicImgSrc}/>
        })}
      </div>
    );
  }
}

class Item extends Component {
  render() {
    return (
      <div className="music-item">
        <img className="item-img" src={this.props.imgSrc}></img>
        <div className="item-content">
          <span>{this.props.index}.</span>
          <span>{this.props.name}</span>
        </div>
        <div className="item-operate">
          <i className="iconfont icon-delete"></i>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {state: state.fetchMusic}
  },
  dispatch => {
    return {actions: bindActionCreators(action, dispatch)}
  }
)(MusicList);
