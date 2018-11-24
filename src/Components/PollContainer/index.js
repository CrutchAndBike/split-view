import React, { Component } from 'react';
import './PollContainer.css';
import PollElement from '../PollElement';
import PollControls from '../PollControls';
import { cn } from '@bem-react/classname';

const cnPollContainer = cn("polls");

class PollContainer extends Component {
  render() {
    return (
      <div className={cnPollContainer()}>
        <div className={cnPollContainer("controls")}>
          <PollControls setup={this.props.setup}/>
        </div>
        <h1 className={cnPollContainer("header")}>{this.props.header}</h1>
        <div className={cnPollContainer("container")}>
        {
          this.props.answers.map((option, index) => 
            <PollElement key={index} className={cnPollContainer("option")} answer={option.answer} />
          )
        }
        </div>
      </div>
    );
  }
}

export default PollContainer;
