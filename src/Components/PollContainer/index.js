import React, { Component } from 'react';
import './PollContainer.css';
import PollWrapper from '../PollElement/PollWrapper';
import PollControls from '../PollControls';
import { cn } from '@bem-react/classname';

const cnPollContainer = cn('polls');

class PollContainer extends Component {
  render() {
    console.log(this.props);
    const { isFinished, setup, header } = this.props;
    return <div>
      {!isFinished && <div className={cnPollContainer()}>
        <div className={cnPollContainer("controls")}>
          <PollControls setup={setup}/>
        </div>
        <h1 className={cnPollContainer("header")}>{header}</h1>
        <div className={cnPollContainer("container")}>
        {
          this.props.answers.map((option, index) => 
            <PollWrapper key={index} className={cnPollContainer("option")} options={option} />
          )
        }
        </div>
      </div>}
      {isFinished && <span>Finished</span>}
    </div>
  }
}

export default PollContainer;
