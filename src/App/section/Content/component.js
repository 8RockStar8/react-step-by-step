import React, { PureComponent, Fragment } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './../../components/Home';
import Users from './../../components/Users';
import User from './../../components/User';
import Error from './../../components/Error';

import './component.css';
class Content extends PureComponent {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <div className='content'>
                        <div className='content-center'>
                            <Switch>
                                <Route path="/" exact component={ Home } />
                                <Route path="/users" component={ Users } />
                                <Route path="/user/:login" component={ User } />
                                <Route component={ Error } />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default Content;
