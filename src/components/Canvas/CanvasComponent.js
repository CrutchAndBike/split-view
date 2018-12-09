import React, { Component } from 'react';
import { cn, classnames } from '@bem-react/classname';
import Question from '../Question/Question';
import { QUESTION_TYPES } from '../constants/questionTypes';
// import { Popup } from 'lego-on-react';

import './Canvas.css';

const cnCanvas = cn('Canvas');

class CanvasComponent extends Component {
	constructor(props) {
		super(props);
		this.deleteHandler = this.deleteHandler.bind(this);
	}

	deleteHandler(index) {
		this.props.deleteFieldList(index);
	}

	render() {
		const { className, fieldList } = this.props;
		return (
			<div className={classnames(cnCanvas(), className)}>
				<div className={cnCanvas('Head')}>
					<div className={cnCanvas('Title')}>Вопросы</div>
				</div>
				<div className={cnCanvas('Body')}>
					{
						fieldList.map((field, index) =>
							<Question key={index} id={index} type={field} text={QUESTION_TYPES[field].text}
								deleteHandler={this.deleteHandler} />
						)
					}
				</div>
			</div>
		);
	}
}

export default CanvasComponent;
