import React, { Component } from 'react';
import { Header, Logo, UserAccount } from 'lego-on-react';
import './AuthComponent.css';
import { cn } from '@bem-react/classname';

const cnAuth = cn('auth');

class Auth extends Component {
    render() {
        return (
            <div className={cnAuth()}>
               <h1>Авторизация</h1>
            </div>
        );
    }
}

export default Auth;
