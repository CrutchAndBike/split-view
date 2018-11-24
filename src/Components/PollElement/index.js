import React, { Component } from 'react';
import './PollElement.css';
import { Button, Image } from 'lego-on-react';
import { cn } from '@bem-react/classname';

const cnPollElement = cn("option");

class PollElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  renderCmpByType(options) {
    let component;
    switch(options.type) {
      case "image": 
        component = <Image 
          cls={cnPollElement("image") + ' ' + (this.state.clicked ? cnPollElement('image', {clicked: true}) : '')} 
          url={options.url}
          onClick={ () => this.setState(() => ({ clicked: !this.state.clicked }))} />
        break;
    }
    return component;
  }

  render() {
    return (
      <div className={cnPollElement()}>
        {this.renderCmpByType(this.props.options)}
      </div>
    );
  }
}

export default PollElement;
