import React, { Component } from 'react';
import './PollComponent.css';
import { Button, Image } from 'lego-on-react';
import { cn } from '@bem-react/classname';

const cnPollElement = cn('option');

class PollComponent extends Component {
    renderCmpByType(props) {
        switch(props.options.type) {
        case 'image':
            return <React.Fragment>
                <Image
                    cls={cnPollElement('image')}
                    url={props.options.url}
                    onClick={() => this.props.showResult()}/>
                <Button theme="action" size="l" view="default" tone="default" text={props.options.answer || 'Выбрать'} />
            </React.Fragment>;
        case 'audio':
            return <React.Fragment>
                <audio cls={cnPollElement('audio')} controls="controls" preload='auto'>
                    <source src={props.options.url}/>
                </audio>
                <Button theme="action" cls={cnPollElement('button')} size="l" view="default" tone="default" text={props.options.answer} />
            </React.Fragment>;
        case 'video':
            return <React.Fragment>
                <video className={cnPollElement('video')} controls="controls" muted autoPlay>
                    <source src={props.options.url}/>
                </video>
                <Button theme="action" 
                    cls={cnPollElement('button')} 
                    size="l" view="default" 
                    tone="default" 
                    text={props.options.answer || 'Выбрать'} 
                    onClick={() => this.props.onClick(this.props.index+1)}/>
            </React.Fragment>;
        case 'text':
            return <React.Fragment>
                <div className={cnPollElement('text')}>
                    {props.options.data}
                </div>
                <Button theme="action" cls={cnPollElement('button')} size="l" view="default" tone="default" text={props.options.answer || 'Выбрать'} />
            </React.Fragment>;
        default:
            return <React.Fragment>
                <Button 
                    theme="action" cls={cnPollElement('button')} 
                    size="l" view="default" tone="default" 
                    text={props.options.answer || 'Выбрать'} />
            </React.Fragment>;
        }
    }

    render() {
        let isActive = this.props.checkedOption === this.props.index;
        console.log(!isActive);
        return (
            <div className={cnPollElement()}>
                {this.renderCmpByType(this.props)}
            </div>
        );
    }
}

export default PollComponent;
