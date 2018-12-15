import React, { Component } from 'react';
import Icon from '../Icon/Icon';

import { cn } from '@bem-react/classname';

import './Question.css';
import './Question-Delete.css';
import './Question-Title.css';
import './Question-Type.css';

const cnQuestion = cn('Question');

class Question extends Component {
    render() {
        const { text, type, question, id } = this.props;
        return (
            <div className={cnQuestion()} onClick={this.props.onClick}>
                <div className={cnQuestion('Title')}>{question || 'Вопрос'}</div>
                <div className={cnQuestion('Type')}>
                    <Icon glyph={type} size="m" />
                    {text}
                </div>
                <div className={cnQuestion('Delete')} onClick={e => { e.stopPropagation(); this.props.deleteHandler(id);}}>
                    <Icon glyph="trash" size="m" alt="Удалить" />
                </div>
            </div>
        );
    }
}

export default Question;
