import React, { Component } from 'react';
import MainContainer from './components/Main/MainContainer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthComponent from './components/Auth/AuthComponent';
// import TokenContainer from './components/Token/TokenContainer';
// import PrivateRoute from './components/PrivateRoute/PrivateRouteComponent';
import Constructor from './components/Constructor/Constructor';

import { Font } from 'lego-on-react';

import createApplicationStore from './store/createApplicationStore';
import './App.css';
import { cn } from '@bem-react/classname';

const cnApp = cn('App');

const { store, persistor } = createApplicationStore();

class App extends Component {
	render() {
		return (
			<div className={cnApp()}>
				<Constructor />
			</div>
		);
	}
}

export default App;
