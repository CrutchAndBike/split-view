import React, { Component } from 'react';
import axios from 'axios';
import { Spin } from 'lego-on-react';
import { cn } from '@bem-react/classname';
import { Redirect } from 'react-router-dom';
import './Progress.css';

const cnProgress = cn('Progress');

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
                //console.log(res);
                this.props.saveUser( { name: res.data.name } );
                this.setState(() => ({ backendResponded: true }));
            }
        });
    }

    render() {
        return this.state.backendResponded ? <Redirect to='/list'/>
            : <div className={cnProgress()}>
                <h1 className={cnProgress('Header')}>Авторизуем...</h1>
                <Spin size="l" progress="yes"/>
            </div>;
    }

}

export default TokenCallback;
