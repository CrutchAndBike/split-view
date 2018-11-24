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
          <PollControls setup={[
              {type: "select", text: "Имя",options:['Один','Два']}, 
              {type:"input", text: "Поле"}, 
              {type:"checkbox", text:"Чекбокс"}]}/>
        </div>
        <h1 className={cnPollContainer("header")}>{this.props.header}</h1>
        <div className={cnPollContainer("container")}>
          <PollElement className={cnPollContainer("option")} answer="Да" />
          <PollElement className={cnPollContainer("option")} answer="Нет" />
        </div>
      </div>
    );
  }
}

export default PollContainer;
