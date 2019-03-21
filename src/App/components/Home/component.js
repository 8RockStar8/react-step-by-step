import React, { PureComponent } from 'react';

import Button from '@material-ui/core/Button';

class Home extends PureComponent {
	render() {
		return(
			<div>
				<h1>Welcome React App</h1>
                <Button className='my-btn' variant='contained' color='primary'>
                    Hello World
                </Button>
			</div>
		);	
	}
}

export default Home;
