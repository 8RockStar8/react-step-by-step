import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Users from './Users';
import User from './User';
import UserNotFound from './UserNotFound';

import './component.css';

function Components() {
    return (
        <Switch>
            <Route path="/users" exact component={ Users } />
            <Route path="/user/:login" exact component={ User } />
            <Route component={ UserNotFound } />
        </Switch>
    );
}

export default Components;

