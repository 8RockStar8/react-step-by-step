import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Pages from './../../Pages';
import Components from './../../Components';

// include Actions here only for test
import Actions from './../../Actions';

function Content() {
    return (
        <div className='content'>
            <Actions />
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

