import React, { Component } from 'react';
import axios from 'axios';


class TokenCallback extends Component {

  componentDidMount() {

    const token = /access_token=([^&]+)/.exec(document.location.hash)[1];
    console.log(token);

    axios.get('http://localhost:3001/login/yandex', {
      headers: {
        'Authorization': token
      }
    })
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return <div></div>
  }

}

export default TokenCallback;
