import React, { Component } from 'react';
import { Header, Logo, UserAccount } from 'lego-on-react';
import { Route, Switch } from 'react-router-dom';
import NavComponent from '../Navigation/NavComponent';
import ContentComponent from '../Content/ContentComponent';
import './PageComponent.css';
import { cn } from '@bem-react/classname';

const cnPage = cn('page');
const links = ['Главная', 'Создать опрос'];

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
                            name="John Doe" url="https://passport.yandex.ru/passport?mode=passport"
                            avatarId="20706/84473936-5041676"
                            pic={true} />}
                >
                </Header>
                <Switch>
                    <Route exact path='/poll' component={ContentComponent}/>
                    {/* <Route exact path='/create' component={CreateComponent}/> */}
                </Switch>
            </div>
        );
    }
}

export default Page;
