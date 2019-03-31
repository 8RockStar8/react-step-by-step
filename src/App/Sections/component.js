import React, { Fragment } from 'react';

import { BrowserRouter } from 'react-router-dom';

import './component.css';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function Section() {
    return(
        <BrowserRouter>
            <Fragment>
                <Header />
                <Content />
                <Footer />
            </Fragment>
        </BrowserRouter>
    );
}

export default Section;

