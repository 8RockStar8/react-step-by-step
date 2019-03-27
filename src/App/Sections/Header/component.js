import React from 'react';

import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';

import './component.css';

function Header() {
    return(
        <AppBar position='static'>
            <div className='header-center'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </div>
        </AppBar>
    );
}

export default Header;

