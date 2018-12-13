import React, { Component } from 'react';

import './Toolbar.css';

import { cn, classnames } from '@bem-react/classname';
import ToolbarElem from './Toolbar-Elem/Toolbar-Elem';
import { QUESTION_TYPES } from '../constants/questionTypes';

const cnToolbar = cn('Toolbar');

class ToolbarComponent extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(componentType) {
        this.props.addFieldList(componentType);
    }

    render() {
        return (
            <ul className={classnames(cnToolbar(), this.props.className)}>
                {
                    Object.keys(QUESTION_TYPES).map((question, index) =>
                        <ToolbarElem key={index} icon={question}
                            text={QUESTION_TYPES[question].text} onClick={this.handleClick} />
                    )
                }
            </ul>
        );
    }
}

export default ToolbarComponent;
