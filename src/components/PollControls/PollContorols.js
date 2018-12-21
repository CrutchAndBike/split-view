import React, { Component } from 'react';
import './PollControls.css';
import { Button, Select, CheckBox, TextInput } from 'lego-on-react';
import { cn } from '@bem-react/classname';
import axios from 'axios';
axios.defaults.withCredentials = true;

const cnPollControls = cn('controls');
const cnPollControl = cnPollControls('item');

class PollControls extends Component {
    constructor(props) {
        super(props);

        this.state = {
            field: {},
            forms: []
        };
    }

    vote() {
        if(!this.props.checkedOption) {
            alert('Выберите один из вариантов');
        }
        else {
            axios.post('https://kauzlein.ru:3443/api/insert-result',
                { 
                    pollId: this.props.pollId,
                    selectedVariant: this.props.checkedOption,
                    forms: this.state.forms
                },  {
                }).then(res => {
                if (res.status === 200) {
                    console.log('Вы проголосовали');
                }
            });
        }
    }

    onChangeHandler(e, control) {
        const index = control.text;
        const newField = Object.assign({}, this.state.field);
        newField[index] = e;
        this.setState({ forms: [...this.state.forms, { type: control.type, text: control.text, value: e }] });
        this.setState({ field: newField });
    }

    onChangeCheckboxHandler(control) {
        const index = control.text;
        const newField = Object.assign({}, this.state.field);
        newField[index] = !newField[index];
        this.setState({ forms: [...this.state.forms, { type: control.type, text: control.text, value: newField[index] }] });
        this.setState({ field: newField });
    }

    render() {
        return <React.Fragment>
            {
                this.props.hasForm ? <div className={cnPollControls()}>
                    { this.props.setup.map((control, index) => {
                        switch(control.type) {
                        case 'input':
                            return <React.Fragment key={index}>
                                <label className={cnPollControls('item-label')}>{control.text}</label>
                                <TextInput cls={cnPollControl} theme="normal" size="m" text={this.state.field[control.text]}
                                    onChange={(e) => this.onChangeHandler(e, control)}/>
                            </React.Fragment>;
                        case 'select':
                            return <React.Fragment key={index}>
                                <label className={cnPollControls('item-label')}>{control.text}</label>
                                <Select cls={cnPollControl} theme="normal" size="m" type="radio" 
                                    val={this.state.field[control.text]}
                                    onChange={(e) => this.onChangeHandler(e, control)}
                                    items={control.options.map((item, i) => { return { val: i, text: item };})} />
                            </React.Fragment>;
                        case 'checkbox':
                            return <CheckBox cls={cnPollControl} theme="normal" size="m" checked={this.state.field[control.text]} text={control.text} 
                                key={index} onChange={() => this.onChangeCheckboxHandler(control)}/>;
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
