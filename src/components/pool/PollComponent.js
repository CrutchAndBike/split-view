import React, { Component } from 'react';
import './PollComponent.css';
import { Button, Image } from 'lego-on-react';
import { cn } from '@bem-react/classname';

const cnPollElement = cn('option');

class PollComponent extends Component {
    renderCmpByType(options) {
        let component;
        switch(options.type) {
            case 'image':
                component = <div>
                    <Image
                        cls={cnPollElement('image')}
                        url={options.url}
                        onClick={() => this.props.showResult()}
                    />
                    <Button theme="action" size="l" view="default" tone="default" text={options.answer} />
                </div>;
                break;
        }
        return component;
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
