import React, { Component } from 'react';
import './Editor.css';
import { TextArea, TextInput, Button } from 'lego-on-react';
import { cn } from '@bem-react/classname';

// cn here
const cnTemplate = cn('template');
const cnTemplateQuestion = cnTemplate('question');

class Editor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			answers: [],
		};

		this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
	}

	render() {
		return <div className={cnTemplate()}>
			<div className={cnTemplate('item')}>
				<div className={cnTemplate('title')}>Редактирование вопроса</div>
				<div className={cnTemplate('type')}>{this.getTypeText()}</div>
			</div>
			<div className={cnTemplate('item')}>
				<div className={cnTemplate('subtitle')}>Вопрос</div>
				<TextArea cls={cnTemplateQuestion} theme='normal' size='m' rows={2} text={this.getTypeText()}></TextArea>
			</div>
			{
				this.needAnswers() ? (
					<div className={cnTemplate('item')}>
						<div className={cnTemplate('subtitle')}>Ответы</div>
						<div className={cnTemplate('answers')}>
							<div className={cnTemplate('button_add')} onClick={this.handleAddButtonClick}>
								Добавить
							</div>
							<div className={cnTemplate('answers_list')}>
								{
									this.state.answers.map((item, index) => {
										return <div className={cnTemplate('answers_item')} key={index}>
											<TextInput theme='normal' size='s' text={item} onChange={(e) => {
												console.log(e);
											}} />
											<Button theme='clear' size='s' view='default' tone='default'
												icon={{ 'mods': { 'type': 'cross' } }} />
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
			input: 'Короткий текст',
			area: 'Длинный текст',
			select: 'Выпадающий список',
			radio: 'Один вариант',
			checkbox: 'Несколько вариантов',
		};

		return types[this.props.type];
	}

	needAnswers() {
		return !(this.props.type === 'input' || this.props.type === 'area');
	}

	handleAddButtonClick() {
		let prevAnswers = [...this.state.answers];
		prevAnswers.push(`Вариант ${prevAnswers.length + 1}`);
		this.setState({ answers: prevAnswers });
	}
}

export default Editor;
