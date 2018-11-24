import React, { Component } from 'react';
import './PollElement.css';
import { Button } from 'lego-on-react';
import { cn } from '@bem-react/classname';

const cnPollElement = cn("option");

class PollElement extends Component {
  render() {
    return (
      <div className={cnPollElement()}>
        <Button theme="action" size="l" view="default" tone="default" text={this.props.answer}/>
      </div>
    );
  }
}

export default PollElement;
