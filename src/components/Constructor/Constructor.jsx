import React, { Component } from 'react';
import Canvas from '../Canvas/Canvas';
import Toolbar from '../Toolbar/Toolbar';

import './Constructor.css';

import { cn } from '@bem-react/classname';

const cnConstructor = cn('Constructor');

class Constructor extends Component {
	render() {
		return (
			<div className={cnConstructor()}>
				<Toolbar className={cnConstructor('Toolbar')} />
				<Canvas className={cnConstructor('Canvas')} />
			</div>
		);
	}
}

export default Constructor;