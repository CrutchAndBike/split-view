import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageComponent from '../Page/PageComponent';
import AuthComponent from '../Auth/AuthComponent';
import './MainComponent.css';
import { cn } from '@bem-react/classname';
import TokenCallback from "../TokenCallback/TokenCallback";

const cnMain = cn('main');

class Main extends Component {
    render() {
        return (
            <div className={cnMain()}>
                <Switch>
                    <Route exact path='/poll' component={PageComponent}/>
                    <Route exact path='/auth' component={AuthComponent}/>
                    <Route exact path='/token' component={TokenCallback}/>
                </Switch>
            </div>
        );
    }
}

export default Main;
