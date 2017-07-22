import React from 'react';
import {Router, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import Home from '../components/Home';
import MusicList from '../components/MusicList';
import Find from '../components/Find';
import Social from '../components/Social';

const history = createHashHistory();

function Routes() {
    return (
        <Router history={history}>
            <div>
                <Route path='/' component={Home}/>
                <Route path='/music-list' component={MusicList}/>
                <Route path='/find' component={Find} />
                <Route path='/social' component={Social} />
            </div>
        </Router>
    );
}

export default Routes;