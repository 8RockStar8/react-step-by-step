import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Users from './Users';
import User from './User';
import UserNotFound from './UserNotFound';

import './component.css';

function Components(props) {
    return (
        <Switch>
            <Route path="/users" exact component={ Users } params={ { store: props.store } } />
            <Route path="/user/:login" exact component={ User } />
            <Route component={ UserNotFound } />
        </Switch>
    );
}

export default Components;

