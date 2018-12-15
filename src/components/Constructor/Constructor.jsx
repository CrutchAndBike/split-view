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
            modalVisible: false,
            selectedQuestion: {}
        };

        this.selectedQuestion = {};
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    openModal(index) {
        this.setState({ selectedQuestion: this.props.fieldList[index] });
        this.setState({ modalVisible: true });
    }

    closeModal() {
        this.setState({ modalVisible: false });
        this.setState({ selectedQuestion: {} });
    }

    render() {
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
                    <Link href="#" theme="islands" text="Ответы" />
                    <Link href="#" theme="islands" text="Что-то еще" />
                    <div className={cnConstructor('Action')}>
                        <Button
                            size="m"
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
                        <Button
                            size="m"
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
                    <div className={cnConstructor('CanvasArea')}>
                        <CanvasContainer className={cnConstructor('Canvas')} type="question" openModal={this.openModal} />
                        <CanvasContainer className={cnConstructor('Canvas', null, 'Canvas-Last')} type="split" />
                    </div>
                </div>
                <QuestionModalContainer
                    modalVisible={this.state.modalVisible}
                    closeModal={this.closeModal}
                    selectedQuestion={this.state.selectedQuestion}
                />
            </div>
        );
    }
}

export default Constructor;
