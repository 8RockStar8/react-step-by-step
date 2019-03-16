import React, { PureComponent, Fragment } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './../Header';
import Home from './Home';
import Users from './Users';
import User from './UserSingle';
import Error from './Error';
import Footer from './../Footer';

import './component.css';
class Content extends PureComponent {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <div>
                        <Header />
                        <div className='content'>
                            <div className='content-center'>
                                <Switch>
                                    <Route path="/" exact component={ Home } />
                                    <Route path="/users" component={ Users } />
                                    <Route path="/single/:login" component={ User } />
                                    <Route component={ Error } />
                                </Switch>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default Content;
