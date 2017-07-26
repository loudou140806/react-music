import React, { Component } from 'react';
import './index.less';

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      musicState: 'pause'
    }
    this.showPlay = () => {
      alert('showPlay');
    }
    this.play = () => {
      alert('play');
    }
    this.changeTime = () => {
      alert('changeTime');
    }
  }
  render() {
    return (
        <div style={{'backgroundColor': 'skinColor'}} className="footer">
            <div className="mini-music">
                <div className="music-img">
                    <img ref="img" alt="pictu"></img>
                </div>
                <div className="music-name">
                    <p></p>
                    <div className="progress">
                        <span className="start">00:00</span>
                        <div ref="progressBar" className="progress-bar">
                            <div className="now" ref="now"></div>
                        </div>
                        <span className="end" >05:00</span>
                    </div>
                </div>
                <div className="music-control">
                    <i className={this.state.musicState === 'pause' ? 'iconfont icon-pause' : 'iconfont icon-paly'} ></i>
                </div>
              </div>
        </div>
    );
  }
}

export default Footer;
