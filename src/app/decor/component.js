import React, { PureComponent } from 'react';

import DecorUp from './decor-up/component';
import DecorDown from './decor-down/component';
import './css/style.css';

class Decor extends PureComponent {
    render() {
        return(
            <div className="decor">
                <div className="decor-rel">
                    <DecorUp />
                    <DecorDown />
                </div>
            </div>
        );
    }
}

export default Decor;