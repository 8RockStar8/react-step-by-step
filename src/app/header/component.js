import React, { PureComponent } from 'react';

import Logo from './../logo/component';
import './css/style.css';
class Header extends PureComponent {
    render() {
        return(
            <header>
                <div className="header-center">
                    <div className="header-logo-place">
                        <Logo />
                    </div>
                    <div className="header-menu-place">
                        {/* TODO: header menu  */}
                        <p className="header-text">header</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;