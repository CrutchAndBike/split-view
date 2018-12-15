import React, { Component } from 'react';
import './Editor.css';
import { TextArea, TextInput, Button } from 'lego-on-react';
import Icon from '../Icon/Icon';
import { cn } from '@bem-react/classname';

// cn here
const cnEditor = cn('Editor');
const cnEditorQuestion = cnEditor('question');

class Editor extends Component {

    render() {
        const type = this.props.type;

        return <div className={cnEditor()}>
            <div className={cnEditor('Head')}>
                <div className={cnEditor('Title')}>Редактирование вопроса</div>
                <div className={cnEditor('Type')}>
                    <Icon glyph={type} size='m' />
                    {this.getTypeText()}
                </div>
            </div>
            <div className={cnEditor('Body')}>
                <div className={cnEditor('Subtitle')}>Вопрос</div>
                <TextArea cls={cnEditorQuestion} theme='normal' size='m' rows={2}
                    text={this.props.question || this.getTypeText()}
                    onChange={(e) => this.props.handleChangeQuestion(e)}
                />
            </div>
            {
                this.needAnswers() ? (
                    <div className={cnEditor('Options')}>
                        <div className={cnEditor('Subtitle')}>Ответы</div>
                        <div className={cnEditor('Answers')}>
                            <div className={cnEditor('button_add')}
                                onClick={this.props.handleAddButtonClick}>
                                <Icon glyph='plus' size='m' />
                                Добавить
                            </div>
                            <div className={cnEditor('answers_list')}>
                                {
                                    this.props.answers.map((item, index) => {
                                        return <div className={cnEditor('answers_item')} key={index}>
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
