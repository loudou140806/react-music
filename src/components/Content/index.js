import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MusicList from '../MusicList';
import Find from '../Find';
import Social from '../Social';
import './index.less';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path='/find' component={Find} />
          <Route path='/social' component={Social} />
          <Route path='/' component={MusicList}/>
        </Switch>
      </div>
    );
  }
}

export default Content;
