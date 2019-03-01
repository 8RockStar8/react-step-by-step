import React, { PureComponent, Fragment } from 'react';

import Header from './header/component';
import Content from './content/component';
import Footer from './footer/component';

import './css/style.css';
class App extends PureComponent {
    render() {
        return(
            <Fragment>
                <Header />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default App;