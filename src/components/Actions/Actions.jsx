import React, { Component } from 'react';
import { Button } from 'lego-on-react';

import './Actions.css';

import { cn } from '@bem-react/classname';

const cnActions = cn('Actions');

class Actions extends Component {
    render() {
        return (
            <div className={cnActions()}>
                <Button theme="normal" size="m" text="Отмена" onClick={this.props.handleCloseModal} />
                <Button theme="action" size="m" text="Сохранить" onClick={this.props.handleCloseModal} />
            </div>
        );
    }
}

export default Actions;