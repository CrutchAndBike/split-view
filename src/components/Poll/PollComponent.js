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
                <Button theme="action" size="l" view="default" tone="default" text={props.options.answer} />
            </React.Fragment>;
        case 'audio':
            return <div>

            </div>;
        case 'video':
            return <React.Fragment>
                <video className={cnPollElement('video')} controls="controls" muted autoPlay>
                    <source src={props.options.url}/>
                </video>
                <Button theme="action" 
                    cls={cnPollElement('button') + ' ' + cnPollElement('button', { active: true })} 
                    size="l" view="default" 
                    tone="default" 
                    text={props.options.answer} 
                    onClick={() => this.props.showResult()}/>
            </React.Fragment>;
        case 'text':
            return <React.Fragment>
                <div className={cnPollElement('text')}>
                    {props.options.data}
                </div>
                <Button theme="action" cls={cnPollElement('button')} size="l" view="default" tone="default" text={props.options.answer} />
            </React.Fragment>;
        default:
            return <React.Fragment>
                <Button 
                    theme="action" cls={cnPollElement('button')} 
                    size="l" view="default" tone="default" 
                    text={props.options.answer} />
            </React.Fragment>;
        }
    }

    render() {
        return (
            <div className={cnPollElement()}>
                {this.renderCmpByType(this.props)}
            </div>
        );
    }
}

export default PollComponent;
