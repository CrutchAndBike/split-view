import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageComponent from '../Page/PageComponent';
import AuthComponent from '../Auth/AuthComponent';
import './MainComponent.css';
import { cn } from '@bem-react/classname';
import tokenCallback from "../tokenCallback/tokenCallback";

const cnMain = cn('main');

class Main extends Component {
    render() {
        return (
            <div className={cnMain()}>
                <Switch>
                    <Route exact path='/pool' component={ContentComponent}/>
                    <Route exact path='/token' component={tokenCallback}/>
                </Switch>
            </div>
        );
    }
}

export default Main;
