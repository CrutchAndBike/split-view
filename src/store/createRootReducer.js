import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import splitViewStore from './reducers/splitView';

const persistHashtagConfig = {
    key: 'hashtag',
    storage
};

const createRootReducer = () => combineReducers({
    splitViewStore: persistReducer(persistHashtagConfig, splitViewStore),
});

export default createRootReducer;
