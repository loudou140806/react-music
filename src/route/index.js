import React from 'react';
import {Router, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import Home from '../components/home';
import One from '../components/one';
import Search from '../components/search';
import Mine from '../components/mine';

const history = createHashHistory();

function Routes() {
    return (
        <Router history={history}>
            <div>
                <Route path='/' component={Home}/>
                <Route path='/one' component={One}/>
                <Route path='/search' component={Search} />
                <Route path='/mine' component={Mine} />
            </div>
        </Router>
    );
}

export default Routes;