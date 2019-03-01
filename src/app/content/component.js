import React, { PureComponent } from 'react';

import Home from './home/component';

import './css/style.css';

class Content extends PureComponent {
    render() {
        return(
            <div className="content">
                <Home />
            </div>
        );
    }
}

export default Content;