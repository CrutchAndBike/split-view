import React, { Component } from 'react';

import './Links.css';

import { cn, classnames } from '@bem-react/classname';

const cnLinks = cn('Links');

class Links extends Component {
	render() {
		return (
			<div className={classnames(cnLinks(), this.props.className)}>
				{this.props.children}
			</div>
		);
	}
}

export default Links;