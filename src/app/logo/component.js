import React, { PureComponent } from 'react';

import imgSrc from './images/logo.svg';
import './css/style.css';

class Logo extends PureComponent {
    render() {
        return(
            <img src={imgSrc} className="logo" />
        );
    }
}

export default Logo;