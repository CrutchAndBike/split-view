import React, { Component } from 'react';
import Main from './Components/Main';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

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
                        <Main />
                    </PersistGate>
                </Provider>
            </div>
        );
    }
}

export default App;
