import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class TokenCallback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backendResponded: false
    };
  }
  componentDidMount() {

    const token = /access_token=([^&]+)/.exec(document.location.hash)[1];

    axios.get('http://217.23.138.53:3001/login/yandex', {
      headers: {
        'Authorization': token
      },
      withCredentials: true
    }).then(res => {
        if(res.status === 200) {
          console.log(res);
          this.props.saveUser( { name: res.data.name } );
          this.setState(() => ({ backendResponded: true }));
      }
    });
  }

  render() {
    return this.state.backendResponded && <Redirect to='/poll'/>;
  }

}

export default TokenCallback;
