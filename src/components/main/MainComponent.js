import React, { Component } from 'react';
import { Header, Logo, Footer, UserAccount } from 'lego-on-react';
import NavComponent from '../navigation/NavComponent';
import Content from '../content/ContentComponent';
import './Main.css';
import { cn } from '@bem-react/classname';

const cnMain = cn('main');
const links = ['Главная', 'Создать опрос'];

class Main extends Component {
    render() {
        return (
            <div className={cnMain()}>
                <Header
                    fixed="yes"
                    tableau="yes"
                    logo={<Logo cls={cnMain("logo")} name="ru-84x36"/>}
                    left={<NavComponent links={links}/>}
                    right={
                        <UserAccount hasTicker="yes" hasAccentLetter="yes"
                                     name="John Doe" url="https://passport.yandex.ru/passport?mode=passport"
                                     pic={{ 'avatarId': "20706/84473936-5041676" }}/>}
                >
                </Header>
                <Content className={cnMain('content')} />
            </div>
        );
    }
}

export default Main;
