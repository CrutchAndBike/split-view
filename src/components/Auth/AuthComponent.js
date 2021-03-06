import React, { Component } from 'react';
import { Button, Logo } from 'lego-on-react';
import { withRouter } from 'react-router-dom';
import './AuthComponent.css';
import { cn } from '@bem-react/classname';

const cnAuth = cn('auth');
const isDev = process.env.NODE_ENV === 'development';

const devRedirect = isDev ? '&redirect_uri=http://localhost:3000/token' : '';
const authUrl = `https://oauth.yandex.ru/authorize?response_type=token&client_id=64990e7a3bdc4600b42bf41903ed0f22${devRedirect}`;

class Auth extends Component {
    render() {
        return (
            <div className={cnAuth()}>
                <div className={cnAuth('block')}>
                    <h1 className={cnAuth('header')}>Авторизуйтесь в аккаунте</h1>
                    <a href={authUrl}>
                        <Button theme="normal" size="m" pin="circle-circle">
                            <Logo name="ys-ru-64x27" style={{ 'margin': '15px 15px' }} attrs={{ 'style': { 'margin': '15px 15px' } }} />
                        </Button>
                    </a>
                </div>
            </div>
        );
    }
}

export default withRouter(Auth);
