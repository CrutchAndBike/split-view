import React, { Component } from 'react';

import Editor from './Editor';

class Page extends Component {
	render() {
		return <div>
			<Editor type='select' />
		</div>;
	}
}

export default Page;
