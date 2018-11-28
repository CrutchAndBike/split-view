import React, { Component } from 'react';
import { Header, Logo, UserAccount } from 'lego-on-react';
import { Route, Switch } from 'react-router-dom';
import NavComponent from '../navigation/NavComponent';
import ContentComponent from '../content/ContentComponent';
import './MainComponent.css';
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
                    logo={<Logo cls={cnMain('logo')} name="ru-84x36"/>}
                    left={<NavComponent links={links}/>}
                    right={
                        <UserAccount
                            hasTicker={true}
                            hasAccentLetter={true}
                            name="John Doe" url="https://passport.yandex.ru/passport?mode=passport"
                            avatarId="20706/84473936-5041676"
                            pic={true} />}
                >
                </Header>
                <Switch>
                    <Route exact path='/pool' component={ContentComponent}/>
                </Switch>
            </div>
        );
    }
}

export default Main;
