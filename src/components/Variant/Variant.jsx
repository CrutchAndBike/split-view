import React, { Component } from 'react';
import { Attach, TextInput, TextArea } from 'lego-on-react';

import { cn } from '@bem-react/classname';

import './Variant.css';

const cnVariant = cn('Variant');

const typesFiles = {
    'image': '.png,.jpg,.gif,.webp,.jpeg',
    'video': '.mp4',
    'audio': '.mp3',
    'html': '.html'
};

class Variant extends Component {
    render() {
        const isText = (this.props.type === 'text');

        return (
            <div className={cnVariant()}>
                <div className={cnVariant('Title')}>{this.props.title}</div>
                <div className={cnVariant('Name')}>
                    <span className={cnVariant('Label')}>Название:</span>
                    <TextInput size="m" theme="normal" name="somse" placeholder="Введите название" text={this.props.name} onChange={this.props.onChangeName} />
                </div>
                <div className={cnVariant('Body')}>
                    {
                        isText ?
                            <TextArea theme="normal" size="m" placeholder="Введите текст" text={this.props.value} onChange={this.props.onChange} />
                            :
                            <Attach size="m" theme="normal" name="some" holder="Выберите файл" onChange={this.props.onChange} onReset={this.onResetClick} controlAttrs={{ accept: typesFiles[this.props.type] }} />
                    }
                </div>
            </div>
        );
    }
}

export default Variant;
