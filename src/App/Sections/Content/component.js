import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Pages from './../../Pages';
import Components from './../../Components';

function Content(props) {
    return (
        <div className='content'>
            <div className='content-center'>
                <Switch>
                    <Route path="/" exact component={ Pages } />
                    <Route path="/about" component={ Pages } />
                    <Route component={ Components } />
                </Switch>
            </div>
        </div>
    );
}

export default Content;

