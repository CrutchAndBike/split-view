import React, { Component } from 'react';
import { Header, Logo, UserAccount } from 'lego-on-react';
import { Route, Switch } from 'react-router-dom';
import NavComponent from '../Navigation/NavComponent';
import ContentComponent from '../Content/ContentComponent';
import ConstructorContainer from '../Constructor/ConstructorContainer';
import PollListComponent from '../PollList/PollListComponent';
import './PageComponent.css';
import { cn } from '@bem-react/classname';

const cnPage = cn('page');
const links = [
    { text: 'Мои опросы', url: '/list'},
    { text: 'Создать опрос', url: '/constructor'},
    { text: 'Результаты', url: '/results'},
];

class Page extends Component {
    render() {
        return (
            <div className={cnPage()}>
                <Header
                    fixed="yes"
                    tableau="yes"
                    logo={<Logo cls={cnPage('logo')} name="ru-84x36"/>}
                    left={<NavComponent links={links}/>}
                    right={
                        <UserAccount
                            hasTicker={true}
                            hasAccentLetter={true}
                            name={this.props.userInfo.name} url="https://passport.yandex.ru/passport?mode=passport"
                            pic={true} />}
                >
                </Header>
                <Switch>
                    <Route exact path='/poll/:id' component={ContentComponent}/>
                    <Route exact path='/constructor' component={ConstructorContainer}/>
                    <Route exact path='/list' component={PollListComponent}/>
                </Switch>
            </div>
        );
    }
}

export default Page;
