import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Error from './Error';

function Pages() {
    return(
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/about" component={ About } />
            <Route component={ Error } />
        </Switch>
    );
}

export default Pages;

