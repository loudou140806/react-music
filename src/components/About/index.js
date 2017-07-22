import React, { Component } from 'react';
import './index.less';

class About extends Component {
    constructor(props) {
        super(props);
        this.showAbout = () => {
            alert('showabout');
        }
    }
    render() {
        return (
        <div className="about" style={{"display":"none"}}>
            <i onClick={this.showAbout} className="iconfont icon-close"></i>
            <div className="about-content">
                <h1>关于</h1>
            </div>
            <div onClick={this.showAbout} className="mask"></div>
        </div>);
    }
}

export default About;
