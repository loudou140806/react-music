import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import action from '../../actions';
import './index.less';

class MusicList extends Component {
  constructor(props) {
    super(props);
    this.del = (index) => {
      console.log(index);
      this.props.actions.deleteMusic(index);
    }
  }
  render() {
    const {musicList} = this.props.state;
    console.log(this.props.state);
    return (
      <div>
        {musicList.map((item, index) => {
          return <Item key={index} index={index} name={item.name} src={item.src} imgSrc={item.musicImgSrc} del={this.del}/>
        })}
        <div className="tips"></div>
      </div>
    );
  }
}

class Item extends Component {
  render() {
    const {imgSrc, name} = this.props;
    const index = this.props.index;
    return (
      <div className="music-item">
        <img className="item-img" alt="" src={imgSrc}></img>
        <div className="item-content">
          <span>{index+1}.</span>
          <span>{name}</span>
        </div>
        <div className="item-operate">
          <i className="iconfont icon-delete" onClick={() => {this.props.del(index)}}></i>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {state: state.musicList}
  },
  dispatch => {
    return {actions: bindActionCreators(action, dispatch)}
  }
)(MusicList);
