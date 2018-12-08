import React, { Component } from 'react';
import { cn, classnames } from '@bem-react/classname';
import Question from '../Question/Question';
// import { Popup } from 'lego-on-react';

import './Canvas.css';

const cnCanvas = cn('Canvas');

class Canvas extends Component {
	render() {
		return (
			<div className={classnames(cnCanvas(), this.props.className)}>
				<div className={cnCanvas('Head')}>
					<div className={cnCanvas('Title')}>Вопросы</div>
				</div>
				<div className={cnCanvas('Body')}>
					<Question item={{ text: 'Короткий текст', type: 'short' }} />
					<Question item={{ text: 'Выпадающий список', type: 'select' }} />
					<Question item={{ text: 'Много вариантов', type: 'check' }} />
					<Question item={{ text: 'Число', type: 'number' }} />
				</div>
			</div >
		);
	}
}

export default Canvas;