import React, { PureComponent, Fragment } from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer'; 

class Section extends PureComponent {
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

export default Section;

