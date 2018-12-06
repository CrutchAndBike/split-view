import React, { Component } from 'react';
import './Template.css';
import { TextArea } from 'lego-on-react';
import { cn } from '@bem-react/classname';

// cn here
const cnTemplate = cn('template');


class Template extends Component {
	render() {
		return <div className = { cnTemplate() }>
			<h1 className={ cnTemplate('title') }>Редактирование вопроса</h1>
			<div className={ cnTemplate('type') }>{this.getTypeText(this.props.type)}</div>
			<h2 className={ cnTemplate('subtitle') }>Вопрос</h2>
			<TextArea theme='normal' size='m' text={this.getTypeText(this.props.type)}></TextArea>
			{
				this.needAnswers(this.props.type) ? (
					<h2 className={ cnTemplate('subtitle') }>Ответы</h2>

				) : null
			}
		</div>;
	}

	getTypeText(type) {
		switch(type) {
			case 'input': return 'Короткий текст';
			case 'area': return 'Длинный текст';
			case 'select': return 'Выпадающий список';
			case 'radio': return 'Один вариант';
			case 'checkbox': return 'Несколько вариантов';
		}
	}

	needAnswers(type) {
		if(type === 'input' || type === 'area') {
			return false;
		} else {
			return true;
		}
	}
}

export default Template;
