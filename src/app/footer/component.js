import React, { PureComponent } from 'react';

import Logo from './../logo/component';
import './css/style.css';
class Footer extends PureComponent {
    render() {
        return(
            <footer>
                <div className="footer-center">
                    <div className="footer-social-place">
                        {/* TODO: footer social menu */}
                        <p className="footer-text">footer</p>
                    </div>
                    <div className="footer-logo-place">
                        <Logo />
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;