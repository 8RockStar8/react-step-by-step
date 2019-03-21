import React, { PureComponent } from 'react';

import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';

import './component.css';

class Header extends PureComponent {
    render() {
        return (
            <AppBar position='static'>
                <div className='header-center'>
                    {/* <NavLink className='link' to='/'>Home</NavLink>
                    <NavLink className='link' to='/users'>Users</NavLink> */}
                </div>
            </AppBar>
        );
    }
}

export default Header;