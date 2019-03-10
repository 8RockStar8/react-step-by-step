import React, { PureComponent } from 'react';

import './component.css';
class Content extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(
            (res) => {
                this.setState({
                    items: res
                });
            }
        );
    }

    render() {
        const { items } = this.state;
        return (
            <div className='content'>
                <div className='content-center'>
                    <div className='user-item-place'>
                        {
                            items.map(item => (
                                <div className='user-item-block' key={item.id}>
                                    <a href={item.html_url} target='_blank' rel='noopener noreferrer' className='user-link'>
                                        <img src={item.avatar_url} className='user-item-img' alt='user' />
                                    </a>
                                    <div className='user-item-text-place'>
                                        <p className='user-item-text'>
                                            {item.login}
                                        </p>
                                    </div>
                                </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
