import React, { Component } from 'react';
import { cn, classnames } from '@bem-react/classname';
import Question from '../Question/Question';
import Variant from '../Variant/Variant';

import { QUESTION_TYPES } from '../constants/questionTypes';
import { RadioButton } from 'lego-on-react';

import './Canvas.css';

const cnCanvas = cn('Canvas');

class CanvasComponent extends Component {
    constructor(props) {
        super(props);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.checkedRadioHandler = this.checkedRadioHandler.bind(this);
        this.changeA = this.changeA.bind(this);
        this.changeB = this.changeB.bind(this);
        this.changeFileA = this.changeFileA.bind(this);
        this.changeFileB = this.changeFileB.bind(this);
        this.changeNameA = this.changeNameA.bind(this);
        this.changeNameB = this.changeNameB.bind(this);

        this.state = {
            type: 'image',
            textA: '',
            textB: '',
            fileA: '',
            fileB: '',
            nameA: '',
            nameB: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    deleteHandler(index) {
        this.props.deleteFieldList(index);
    }

    checkedRadioHandler(e) {
        this.setState({ type: e.target.value });
    }

    changeA(val) {
        this.setState({ textA: val });
    }

    changeB(val) {
        this.setState({ textB: val });
    }

    changeFileA(val) {
        this.setState({ fileA: val.target.files[0] });
    }

    changeFileB(val) {
        this.setState({ fileB: val.target.files[0] });
    }

    changeNameA(val) {
        this.setState({ nameA: val });
    }

    changeNameB(val) {
        this.setState({nameB: val});
    }

    handleClick(index) {
        this.props.openModal(index);
    }

    render() {
        const { className, fieldList } = this.props;
        const question = fieldList.map(({ type, question }, index) =>
            <Question
                key={index}
                id={index}
                type={type}
                text={QUESTION_TYPES[type].text}
                question={question}
                deleteHandler={this.deleteHandler}
                onClick={() => this.handleClick(index)} />
        );

        const split = <div className={cnCanvas('Split')}>
            <div className={cnCanvas('SplitType')}>
                <span className={cnCanvas('SplitLabel')}>Тип элемента:</span>
                <RadioButton size="m" theme="normal" id="show_to" name="show_to" value={this.state.type}
                    onChange={this.checkedRadioHandler} >
                    <RadioButton.Radio value="text">Текст</RadioButton.Radio>
                    <RadioButton.Radio value="image">Картинка</RadioButton.Radio>
                    <RadioButton.Radio value="video">Видео</RadioButton.Radio>
                    <RadioButton.Radio value="audio">Аудио</RadioButton.Radio>
                    <RadioButton.Radio value="html" disabled={true}>HTML</RadioButton.Radio>
                </RadioButton>
            </div>
            {
                this.state.type === 'text' ?
                    <div className={cnCanvas('Form')} >
                        <Variant name={this.state.nameA} type={this.state.type} value={this.state.textA}
                            onChange={this.changeA} onChangeName={this.changeNameA} title="Первый вариант" />
                        <Variant name={this.state.nameB} type={this.state.type} value={this.state.textB}
                            onChange={this.changeB} onChangeName={this.changeNameB} title="Второй вариант" />
                    </div>
                    :
                    <div className={cnCanvas('Form')} >
                        <Variant name={this.state.nameA} type={this.state.type} files={this.state.fileA}
                            onChange={this.changeFileA} onChangeName={this.changeNameA} title="Первый вариант" />
                        <Variant name={this.state.nameB} type={this.state.type} files={this.state.fileB}
                            onChange={this.changeFileB} onChangeName={this.changeNameB} title="Второй вариант" />
                    </div>
            }
        </div>;

        return (
            <div className={classnames(cnCanvas(), className)}>
                <div className={cnCanvas('Head')}>
                    <div className={cnCanvas('Title')}>
                        {this.props.type === 'question' ? 'Вопросы' : 'Голосование'}
                    </div>
                </div>
                <div className={cnCanvas('Body')}>
                    {
                        this.props.type === 'question' ? question : split
                    }
                </div>
            </div>
        );
    }
}

export default CanvasComponent;
