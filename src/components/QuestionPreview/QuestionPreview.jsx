import React, { Component } from 'react';
import { TextInput, TextArea, Select, CheckBox } from 'lego-on-react';
import { cn } from '@bem-react/classname';
import './QuestionPreview.css';

const cnQuestionPreview = cn('QuestionPreview');

class QuestionPreview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            check: [],
        };

        this.inputOnChange = this.inputOnChange.bind(this);
        this.checkboxOnChange = this.checkboxOnChange.bind(this);
    }

    componentDidMount() {
        let checks = [];
        for(let i = 0; i < this.props.answers.length; i++) {
            checks.push(false);
        }

        this.setState({ check: checks });
    }

    inputOnChange(e) {
        this.setState({ text: e });
    }

    checkboxOnChange(e, index) {
        let check = [...this.state.check];
        check[index] = !check[index];
        this.setState({ check: check });
    }

    getElementByType(type, answers) {
        switch (type) {
        case 'short':
            return <TextInput theme='normal' size='s' text={this.state.text} 
                onChange={(e) => this.inputOnChange(e)} />;
        case 'long':
            return <TextArea theme='normal' size='s' text={this.state.text} rows={3}
                onChange={(e) => this.inputOnChange(e)} />;
        case 'number':
            return <TextInput theme='normal' size='s' text={this.state.text} type='number' 
                onChange={(e) => this.inputOnChange(e)}/>;
        case 'select':
            return <Select theme='normal' size='s' type='radio' 
                items={answers.map((item, i) => { return { val: i, text: item };})}
            />;
        case 'check':
            return answers.map((item, index) => {
                return <div className={cnQuestionPreview('CheckBox')} key={index}>
                    <CheckBox theme='normal' size='s' text={answers[index]} 
                        checked={this.state.check[index]}
                        onChange={(e) => this.checkboxOnChange(e, index)}
                    />
                </div>;
            });
        default:
            return null;
        }
    }

    render() {
        const { type, question, answers } = this.props;
        
        return (
            <div className={cnQuestionPreview('Item')}>
                <div className={cnQuestionPreview('Label')}>{question}</div>
                {this.getElementByType(type, answers)}
            </div>
        );
    }
}

export default QuestionPreview;
