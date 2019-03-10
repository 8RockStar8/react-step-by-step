import React, { PureComponent, Fragment } from 'react';

import './component.css';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

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
