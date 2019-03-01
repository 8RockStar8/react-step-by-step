import React, { PureComponent, Fragment } from 'react';

import Header from './header/component';

import './css/style.css';
class App extends PureComponent {
    render() {
        return(
            <Fragment>
                <Header />
            </Fragment>
        );
    }
}

export default App;