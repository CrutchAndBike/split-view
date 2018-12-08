import React, { Component } from 'react';
import './Editor.css';
import { TextArea, TextInput, Button } from 'lego-on-react';
import Icon from '../Icon/Icon';
import { cn } from '@bem-react/classname';

// cn here
const cnTemplate = cn('template');
const cnTemplateQuestion = cnTemplate('question');

class Editor extends Component {

	render() {
		const type =  this.props.type;

		return <div className={cnTemplate()}>
			<div className={cnTemplate('item')}>
				<div className={cnTemplate('title')}>Редактирование вопроса</div>
				<div className={cnTemplate('type')}>
					<Icon glyph={type} size='m' />
					{this.getTypeText()}
				</div>
			</div>
			<div className={cnTemplate('item')}>
				<div className={cnTemplate('subtitle')}>Вопрос</div>
				<TextArea cls={cnTemplateQuestion} theme='normal' size='m' rows={2} 
					text={ this.props.question || this.getTypeText() } 
					onChange={(e) => this.props.handleChangeQuestion(e)} 
				/>
			</div>
			{
				this.needAnswers() ? (
					<div className={cnTemplate('item')}>
						<div className={cnTemplate('subtitle')}>Ответы</div>
						<div className={cnTemplate('answers')}>
							<div className={cnTemplate('button_add')} 
								onClick={this.props.handleAddButtonClick}>
								<Icon glyph='plus' size='m' />
								Добавить
							</div>
							<div className={cnTemplate('answers_list')}>
								{
									this.props.answers.map((item, index) => {
										return <div className={cnTemplate('answers_item')} key={index}>
											<TextInput theme='normal' size='s' text={item} 
												onChange={(e) => this.props.handleChangeAnswer(e, index)} 
											/>
											<Button theme='clear' size='s' view='default' tone='default'
												icon={{ 'mods': { 'type': 'cross' } }} num={index}
												onClick={() => this.props.handleDeleteAnswer(index)}
											/>
										</div>;
									})
								}
							</div>
						</div>
					</div>
				) : null
			}
		</div>;
	}

	getTypeText() {
		const types = {
			short: 'Короткий текст',
			long: 'Длинный текст',
			select: 'Один вариант',
			check: 'Несколько вариантов',
			number: 'Число',
		};

		return types[this.props.type] || 'Элемент';
	}

	needAnswers() {
		return !(this.props.type === 'short' || this.props.type === 'long');
	}

}

export default Editor;
