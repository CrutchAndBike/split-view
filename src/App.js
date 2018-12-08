import React, { Component } from 'react';
import MainContainer from './components/Main/MainContainer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthComponent from './components/Auth/AuthComponent';
// import TokenContainer from './components/Token/TokenContainer';
// import PrivateRoute from './components/PrivateRoute/PrivateRouteComponent';

import createApplicationStore from './store/createApplicationStore';
import './App.css';
import { cn } from '@bem-react/classname';
import PollListComponent from './components/PollList/PollListComponent';

const cnApp = cn('App');

const { store, persistor } = createApplicationStore();

class App extends Component {
	render() {
		return (
			<div className={cnApp()}>
				<Provider store={store}>
					<PersistGate persistor={persistor}>
						<Router>
							<div>
								<Route exact path='/list' component={PollListComponent} />
								<Route path='/auth' component={AuthComponent} />
								<MainContainer />
							</div>
						</Router>
					</PersistGate>
				</Provider>
			</div>
		);
	}
}

export default App;
