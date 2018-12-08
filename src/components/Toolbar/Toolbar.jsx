import React, { Component } from 'react';

import './Toolbar.css';

import { cn, classnames } from '@bem-react/classname';
import ToolbarElem from './Toolbar-Elem/Toolbar-Elem';

const cnToolbar = cn('Toolbar');

class Toolbar extends Component {
	render() {
		return (
			<ul className={classnames(cnToolbar(), this.props.className)}>
				<ToolbarElem icon="short" text="Короткий текст" />
				<ToolbarElem icon="long" text="Длинный текст" />
				<ToolbarElem icon="select" text="Один вариант" />
				<ToolbarElem icon="check" text="Несколько вариантов" />
				<ToolbarElem icon="number" text="Число" />
			</ul>
		);
	}
}

export default Toolbar;