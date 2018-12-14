import React, { Component } from 'react';
import './PollComponent.css';
import { Button, Image } from 'lego-on-react';
import { cn } from '@bem-react/classname';

const cnPollElement = cn('option');

class PollComponent extends Component {
    renderCmpByType(options) {
        switch(options.type) {
        case 'image':
            return <div>
                <Image
                    cls={cnPollElement('image')}
                    url={options.url}
                    onClick={() => this.props.showResult()}
                />
                <Button theme="action" size="l" view="default" tone="default" text={options.answer} />
            </div>;
        case 'audio':
            return <div>
                
            </div>;
        case 'video':
            return <div>
                <video cls={cnPollElement('video')} controls="controls">
                    <source src={options.url}/>
                </video>
                <Button theme="action" size="l" view="default" tone="default" text={options.answer} />
            </div>;
        default:
            return <div>
                <Button theme="action" size="l" view="default" tone="default" text={options.answer} />
            </div>;
        }
    }

    render() {
        return (
            <div className={cnPollElement()}>
                {this.renderCmpByType(this.props.options)}
            </div>
        );
    }
}

export default PollComponent;
