import React, { Component } from 'react';
import Actions from '../Actions/Actions';
import { Modal } from 'lego-on-react';
import { cn } from '@bem-react/classname';
import Editor from '../Editor/Editor';
import QuestionPreview from '../QuestionPreview/QuestionPreview';
import './QuestionModal.css';

const cnQuestionModal = cn('QuestionModal');

class QuestionModalComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: '',
            answers: []
        };

        this.handleModalAddButtonClick = this.handleModalAddButtonClick.bind(this);
        this.handleModalChangeQuestion = this.handleModalChangeQuestion.bind(this);
        this.handleModalChangeAnswer = this.handleModalChangeAnswer.bind(this);
        this.handleModalDeleteAnswer = this.handleModalDeleteAnswer.bind(this);
        this.saveQuestion = this.saveQuestion.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedQuestion !== this.props.selectedQuestion) {
            const { answers, question } = this.props.selectedQuestion;
            this.setState({ answers: answers || [] });
            this.setState({ question: question || '' });
        }
    }

    handleModalAddButtonClick() {
        let prevAnswers = [...this.state.answers];
        prevAnswers.push(`Вариант ${prevAnswers.length + 1}`);
        this.setState({ answers: prevAnswers });
    }

    handleModalChangeQuestion(e) {
        this.setState({ question: e });
    }

    handleModalDeleteAnswer(index) {
        let prevAnswers = [...this.state.answers];
        prevAnswers.splice(index, 1);
        this.setState({ answers: prevAnswers });
    }

    handleModalChangeAnswer(e, index) {
        let prevAnswers = [...this.state.answers];
        prevAnswers[index] = e;
        this.setState({ answers: prevAnswers });
    }

    saveQuestion() {
        this.props.saveQuestion(this.props.selectedQuestion.index,
            { question: this.state.question, answers: this.state.answers });
        this.props.closeModal();
    }

    render() {
        const { modalVisible, closeModal, selectedQuestion } = this.props;
        return <Modal
            cls={cnQuestionModal()}
            theme="normal"
            autoclosable={true}
            visible={modalVisible}
            onOutsideClick={() => this.setState({ modalVisible: false })}
        >
            <div className={cnQuestionModal('Content')}>
                <div className={cnQuestionModal('Settings')}>
                    <Editor
                        type={selectedQuestion.type}
                        question={this.state.question}
                        answers={this.state.answers}
                        handleChangeQuestion={this.handleModalChangeQuestion}
                        handleAddButtonClick={this.handleModalAddButtonClick}
                        handleChangeAnswer={this.handleModalChangeAnswer}
                        handleDeleteAnswer={this.handleModalDeleteAnswer}
                    />
                    <Actions handleCloseModal={closeModal} handleSave={this.saveQuestion} />
                </div>
                <div className={cnQuestionModal('Preview')}>
                    <QuestionPreview 
                        type={selectedQuestion.type}
                        question={this.state.question}
                        answers={this.state.answers}
                    />
                </div>
            </div>
        </Modal>;
    }
}

export default QuestionModalComponent;
