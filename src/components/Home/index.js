import React, { Component } from 'react';
import AsideMenu from '../AsideMenu';
import VHeader from '../Header';
import VFooter from '../Footer';
// import Play from '../Play';
import About from '../About';
import Content from '../Content/index';
import './index.less';


class Home extends Component {
  render() {
    return (
        <div>
        {/*<!-- 主界面部分 -->*/}
            <section>
                <div className="home">
                    {/*侧边栏*/}
                    <AsideMenu/>
                    {/*头部*/}
                    <VHeader/>
                    <Content />
                    {/*尾部mini播放器*/}
                    <VFooter/>
                </div>
            </section>
            {/*播放界面*/}
            {/*<section>
                <Play />
            </section>*/}
            {/*隐藏的audio标签*/}
            {/*<audio v-bind:src="audio.src || (musicData[0]&&musicData[0].src) || defaultSrc" v-bind:autoplay="isPlaying" ref="audio"></audio>*/}
            {/*关于界面*/}
            <section>
                <About/>
            </section>
    </div>
    );
  }
}

export default Home;
