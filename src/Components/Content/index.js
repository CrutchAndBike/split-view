import React, { Component } from 'react';
import './Content.css';
import PollContainer from '../PollContainer';
import { cn } from '@bem-react/classname';

const cnContent = cn("content");

class Content extends Component {
  render() {
    return (
      <div className={cnContent()}>
        <PollContainer 
          header="Заголовок"
          answers={[
            {answer: "Вариант 1"},
            {answer: "Вариант 2"}
          ]} 
          setup={[
            {type: "select", text: "Имя",options:['Один','Два']}, 
            {type:"input", text: "Поле"}, 
            {type:"checkbox", text:"Чекбокс"}]}/>
      </div>
    );
  }
}

export default Content;
