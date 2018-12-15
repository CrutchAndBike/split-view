import React, { Component } from 'react';
import { Button } from 'lego-on-react';

import './Actions.css';

import { cn } from '@bem-react/classname';

const cnActions = cn('Actions');

class Actions extends Component {
    render() {
        return (
            <div className={cnActions()}>
<<<<<<< HEAD
<<<<<<< HEAD
                <Button theme="normal" size="m" text="Отмена" onClick={this.props.handleCloseModal} />
                <Button theme="action" size="m" text="Сохранить" onClick={this.props.handleCloseModal} />
=======
                <Button theme="normal" size="m" text="Отмена" onClick={this.props.closeModal} />
                <Button theme="action" size="m" text="Сохранить" onClick={this.props.saveQuestion} />
>>>>>>> e7f8d0357bec8d741685fec5fa3f4915f23f4668
=======
                <Button theme="normal" size="m" text="Отмена" onClick={this.props.handleCloseModal} />
                <Button theme="action" size="m" text="Сохранить" onClick={this.props.handleCloseModal} />
>>>>>>> d940fb3d3e38c5e286b46fb4a90981891b0a81a5
            </div>
        );
    }
}

export default Actions;
