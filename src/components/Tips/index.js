import React, { Component } from 'react';
import './index.less';

class Tips extends Component {
  render() {
    return (
      <div className="tips" onClick={this.props.onClick || null}>{this.props.tips || '没有更多内容了~'}</div>
    );
  }
}

export default Tips;
