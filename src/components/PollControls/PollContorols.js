import React, { Component } from 'react';
import './PollControls.css';
import { Button, Select, CheckBox, TextInput } from 'lego-on-react';
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

    vote() {
        console.log('Вы проголосовали');
    }

    render() {
        return <React.Fragment>
            {
                this.props.hasForm ? <div className={cnPollControls()}>
                    { this.props.setup.map((control, index) => {
                        switch(control.type) {
                        case 'input':
                            return <React.Fragment>
                                <label className={cnPollControls('item-label')}>{control.text}</label>
                                <TextInput cls={cnPollControl} theme="normal" size="m" text={this.state.text}
                                    key={index} onChange={(e) => this.setState({ text: e})}/>
                            </React.Fragment>;
                        case 'select':
                            return <React.Fragment>
                                <label className={cnPollControls('item-label')}>{control.text}</label>
                                <Select cls={cnPollControl} theme="normal" size="m" type="radio" 
                                    items={control.options.map((item, i) => { return { val: i, text: item };})} key={index} />
                            </React.Fragment>;
                        case 'checkbox':
                            return <React.Fragment>
                                <CheckBox cls={cnPollControl} theme="normal" size="m"  checked={this.state.checkbox} text={control.text}
                                    key={index} onChange={() => this.setState({ checkbox: !this.state.checkbox })}/>
                            </React.Fragment>;
                        default:
                            return null;
                        }
                    })
                    }
                    <Button cls={cnPollControls('button')} 
                        theme="action"
                        size="m" view="default" 
                        tone="default" 
                        text="Проголосовать" 
                        onClick={() => this.vote()}/>
                </div>
                    :
                    <Button cls={cnPollControls('button')} 
                        theme="action"
                        size="m" view="default" 
                        tone="default" 
                        text="Проголосовать" 
                        onClick={() => this.vote()}/>
            }
        </React.Fragment>;
    }
}

export default PollControls;
