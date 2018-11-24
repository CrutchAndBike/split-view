import React, { Component } from 'react';
import Main from './Components/Main'
import './App.css';
import { cn } from '@bem-react/classname';

const cnApp = cn("App");

class App extends Component {
  render() {
    return (
      <div className={cnApp()}>
        <Main></Main>
      </div>
    );
  }
}

export default App;
