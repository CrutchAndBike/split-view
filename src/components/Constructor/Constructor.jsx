import React, { Component } from 'react';
import CanvasContainer from '../Canvas/CanvasContainer';
import ToolbarContainer from '../Toolbar/ToolbarContainer';
import Icon from '../Icon/Icon';
import { Link, Button } from 'lego-on-react';
import QuestionModalContainer from '../QuestionModal/QuestionModalContainer';

import Links from '../Links/Links';

import './Constructor.css';
import './Constructor-Body.css';
import './Constructor-Title.css';
import './Constructor-Head.css';
import './Constructor-Edit.css';
import './Constructor-Links.css';

import { cn } from '@bem-react/classname';

const cnConstructor = cn('Constructor');

class Constructor extends Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            modalVisible: true,
            modalQuestion: '',
            modalAnswers: [],
        };

        this.handleModalAddButtonClick = this.handleModalAddButtonClick.bind(this);
        this.handleModalChangeQuestion = this.handleModalChangeQuestion.bind(this);
        this.handleModalChangeAnswer = this.handleModalChangeAnswer.bind(this);
        this.handleModalDeleteAnswer = this.handleModalDeleteAnswer.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
=======
            modalVisible: false,
            selectedQuestion: {}
        };

        this.selectedQuestion = {};
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.savePool = this.savePool.bind(this);
    }

    openModal(index) {
        this.setState({ selectedQuestion: this.props.fieldList[index] });
>>>>>>> e7f8d0357bec8d741685fec5fa3f4915f23f4668
        this.setState({ modalVisible: true });
    }

    closeModal() {
        this.setState({ modalVisible: false });
<<<<<<< HEAD
    }

    handleModalAddButtonClick() {
        let prevAnswers = [...this.state.modalAnswers];
        prevAnswers.push(`Вариант ${prevAnswers.length + 1}`);
        this.setState({ modalAnswers: prevAnswers });
    }

    handleModalChangeQuestion(e) {
        this.setState({ modalQuestion: e });
    }

    handleModalDeleteAnswer(index) {
        let prevAnswers = [...this.state.modalAnswers];
        prevAnswers.splice(index, 1);
        this.setState({ modalAnswers: prevAnswers });
    }

    handleModalChangeAnswer(e, index) {
        let prevAnswers = [...this.state.modalAnswers];
        prevAnswers[index] = e;
        this.setState({ modalAnswers: prevAnswers });
    }

    render() {
        console.log(this.props);
=======
        this.setState({ selectedQuestion: {} });
    }

    savePool() {
        this.splitInfo = this.child.getSplitInfo();
        console.log(this.splitInfo);
    }

    render() {
>>>>>>> e7f8d0357bec8d741685fec5fa3f4915f23f4668
        return (
            <div className={cnConstructor()}>
                <div className={cnConstructor('Head')}>
                    <h3 className={cnConstructor('Title')}>Новый опрос</h3>
                    <div className={cnConstructor('Edit')}>
                        <Icon glyph="pen" size="m" />
                    </div>
                </div>
                <Links className={cnConstructor('Links')}>
                    <Link href="#" theme="islands" text="Конструктор" disabled={true} />
<<<<<<< HEAD
                    <Link url={'/result/'+this.props.match.id} theme="islands" text="Ответы" />
                    <Link href="#" theme="islands" text="Что-то еще" />
                    <div className={cnConstructor('Action')}>
                        <Button size="m"
=======
                    <Link href="#" theme="islands" text="Ответы" />
                    <Link href="#" theme="islands" text="Что-то еще" />
                    <div className={cnConstructor('Action')}>
                        <Button
                            size="m"
>>>>>>> e7f8d0357bec8d741685fec5fa3f4915f23f4668
                            theme="raised"
                            view="default"
                            tone="default"
                            icon={{
                                'mods': {
                                    'glyph': 'eye'
                                }
                            }}
                            text="Предпросмотр"
                        />
<<<<<<< HEAD
                        <Button size="m"
=======
                        <Button
                            size="m"
>>>>>>> e7f8d0357bec8d741685fec5fa3f4915f23f4668
                            theme="raised"
                            view="default"
                            tone="default"
                            icon={{
                                'mods': {
                                    'glyph': 'dots'
                                }
                            }}
                        />
                    </div>
                </Links>
                <div className={cnConstructor('Body')}>
                    <ToolbarContainer className={cnConstructor('Toolbar')} />
<<<<<<< HEAD
                    <CanvasContainer className={cnConstructor('Canvas')} />
                </div>
                <Modal
                    cls={cnConstructor('Modal')}
                    theme="normal"
                    autoclosable={true}
                    visible={this.state.modalVisible}
                    onOutsideClick={() => {
                        this.setState({ modalVisible: false });
                    }}
                >
                    <div className={cnConstructor('Content')}>
                        <div className={cnConstructor('Settings')}>
                            <Editor
                                type="check"
                                question={this.state.modalQuestion}
                                answers={this.state.modalAnswers}
                                handleChangeQuestion={this.handleModalChangeQuestion}
                                handleAddButtonClick={this.handleModalAddButtonClick}
                                handleChangeAnswer={this.handleModalChangeAnswer}
                                handleDeleteAnswer={this.handleModalDeleteAnswer}
                            />
                            <Actions
                                handleCloseModal={this.closeModal}
                            />
                        </div>
                        <div className={cnConstructor('Preview')}>
							Preview
                        </div>
                    </div>
                </Modal>
=======
                    <div className={cnConstructor('CanvasArea')}>
                        <CanvasContainer className={cnConstructor('Canvas')} type="question" openModal={this.openModal} />
                        <CanvasContainer
                            className={cnConstructor('Canvas', null, 'Canvas-Last')}
                            type="split"
                            onRef={ref => this.child = ref} />
                        <Button theme="action" size="m" text="Сохранить" onClick={this.savePool} />
                    </div>
                </div>
                <QuestionModalContainer
                    modalVisible={this.state.modalVisible}
                    closeModal={this.closeModal}
                    selectedQuestion={this.state.selectedQuestion}
                />
>>>>>>> e7f8d0357bec8d741685fec5fa3f4915f23f4668
            </div>
        );
    }
}

export default Constructor;
