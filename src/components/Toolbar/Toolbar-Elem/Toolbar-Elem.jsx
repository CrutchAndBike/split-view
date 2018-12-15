import React, { Component } from 'react';
import Icon from '../../Icon/Icon';

import './Toolbar-Elem.css';

import { cn } from '@bem-react/classname';

const cnToolbar = cn('Toolbar');

class ToolbarElem extends Component {
    render() {
        const text = this.props.text || '';
        const icon = this.props.icon || '';

        return (
            <li draggable={true} className={cnToolbar('Elem')} onClick={() => this.props.onClick(this.props.icon)}>
                <Icon glyph={icon} size="m" />
                {text}
            </li>
        );
    }
}

export default ToolbarElem;
