import React, { Component } from 'react';
import MainComponent from './components/main/MainComponent';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';

import createApplicationStore from './store/createApplicationStore';
import './App.css';
import { cn } from '@bem-react/classname';

const cnApp = cn('App');

const { store, persistor } = createApplicationStore();

class App extends Component {
    render() {
        return (
            <div className={cnApp()}>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <Router>
                            <MainComponent />
                        </Router>
                    </PersistGate>
                </Provider>
            </div>
        );
    }
}

export default App;
