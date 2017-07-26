import React from 'react';
import {Router, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import Home from '../components/Home';

const history = createHashHistory();

function Routes() {
    return (
        <Router history={history}>
            <div>
                <Route path='/' component={Home}/>
            </div>
        </Router>
    );
}

export default Routes;