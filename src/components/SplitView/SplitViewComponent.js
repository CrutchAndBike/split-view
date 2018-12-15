import React, { Component } from 'react';
import './SplitViewComponent.css';
import PollContainer from '../Poll/PollContainer';
import PollControls from '../PollControls/PollContorols';
import { cn } from '@bem-react/classname';

const cnPollContainer = cn('polls');

class SplitViewComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            checkedOption: undefined,
        };
    }

    optionClick(index) {
        if(this.state.checkedOption !== index) {
            this.setState({ checkedOption : index });
        }
        this.setState({ checkedOption: index });
        console.log(this.state.checkedOption, index);
    }

    render() {
        const { isFinished, setup, header } = this.props;
        return <div className='polls-body'>
            {!isFinished && <React.Fragment>
                <div className={cnPollContainer()}>
                    <h1 className={cnPollContainer('header')}>{header}</h1>
                    <div className={cnPollContainer('container')}>
                        {
                            this.props.answers.map((option, index) =>
                                <PollContainer key={index+1} className={cnPollContainer('option')} index={index+1} 
                                    options={option} onClick={() => this.optionClick(index+1)}
                                    checkedOption={this.state.checkedOption}/>
                            )
                        }
                    </div>
                </div>
                <div className={cnPollContainer('form')}>
                    {this.props.hasForm && <h3 className={cnPollContainer('form-header')}>{this.props.formHeader || 'Расскажите о себе' }</h3>}
                    <div className={cnPollContainer('controls')}>
                        <PollControls setup={setup} hasForm={this.props.hasForm} pollId={this.props.pollId}
                            checkedOption/>
                    </div>
                </div>
            </React.Fragment>}
            {isFinished && <span>Finished</span>}
        </div>;
    }
}

export default SplitViewComponent;
