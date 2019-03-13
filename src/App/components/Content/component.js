import React, { PureComponent } from 'react';

import Users from './Users';

import './component.css';
class Content extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='content'>
                <div className='content-center'>
                    <Users />
                </div>
            </div>
        );
    }
}

export default Content;
