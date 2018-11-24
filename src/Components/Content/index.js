import React, { Component } from 'react';
import './Content.css';
import PollContainer from '../PollContainer';
import { cn } from '@bem-react/classname';

const cnContent = cn("content");

class Content extends Component {
  render() {
    return (
      <div className={cnContent()}>
        <PollContainer header="Вы фронтэндер?"/>
      </div>
    );
  }
}

export default Content;
