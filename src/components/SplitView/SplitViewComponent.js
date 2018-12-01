import React, { Component } from 'react';
import './SplitViewComponent.css';
import PollContainer from '../Poll/PollContainer';
import PollControls from '../PollControls/PollContorols';
import { cn } from '@bem-react/classname';

const cnPollContainer = cn('polls');

class SplitViewComponent extends Component {
    render() {
        const { isFinished, setup, header } = this.props;
        return <div>
            {!isFinished && <div className={cnPollContainer()}>
                <div className={cnPollContainer('controls')}>
                    <PollControls setup={setup}/>
                </div>
                <h1 className={cnPollContainer('header')}>{header}</h1>
                <div className={cnPollContainer('container')}>
                    {
                        this.props.answers.map((option, index) =>
                            <PollContainer key={index} className={cnPollContainer('option')} options={option} />
                        )
                    }
                </div>
            </div>}
            {isFinished && <span>Finished</span>}
        </div>
    }
}

export default SplitViewComponent;
