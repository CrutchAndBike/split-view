import React, { Component } from 'react';
import './PollControls.css';
import { Select, CheckBox, TextInput } from 'lego-on-react';
import { cn } from '@bem-react/classname';

const cnPollControls = cn('controls');
const cnPollControl = cnPollControls('item');

class PollControls extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            select: '',
            checkbox: false
        };
    }

    render() {
        return <div className={cnPollControls()}>
            {
                this.props.setup.map((control, index) => {
                    switch(control.type) {
                    case 'input':
                        return <TextInput cls={cnPollControl} theme="normal" size="m" text={this.state.text}
                            key={index} onChange={() => this.setState({ text: 'aaa'})}/>;
                    case 'select':
                        return <Select cls={cnPollControl} theme="normal" size="m" type="radio"
                            text={control.text} items={control.options} key={index} />;
                    case 'checkbox':
                        return <CheckBox cls={cnPollControl} theme="normal" size="m" text={control.text}
                            key={index}/>;
                    default:
                        return null;
                    }
                })
            }
        </div>;
    }
}

export default PollControls;
