import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageContainer from '../Page/PageContainer';
import AuthComponent from '../Auth/AuthComponent';
import './MainComponent.css';
import { cn } from '@bem-react/classname';
import TokenContainer from '../Token/TokenContainer';
import PrivateRoute from '../PrivateRoute/PrivateRouteComponent';
import Constructor from '../Constructor/Constructor';

const cnMain = cn('main');

class Main extends Component {
	render() {
		console.log(this.props);
		return (
			<div className={cnMain()}>
				<Switch>
					<PrivateRoute exact path='/poll' isAuthorized={Boolean(this.props.userInfo.name)} component={PageContainer}/>
					<PrivateRoute exact path='/list' isAuthorized={Boolean(this.props.userInfo.name)} component={PageContainer}/>
					<Route exact path='/auth' component={AuthComponent}/>
					<Route exact path='/token' component={TokenContainer}/>
					<Route exact path='/constructor' component={Constructor} />
				</Switch>
			</div>
		);
	}
}

export default Main;
