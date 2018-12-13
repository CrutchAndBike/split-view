import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import splitViewStore from './reducers/splitView';

const persistSplitViewConfig = {
    key: 'splitView',
    storage
};

const createRootReducer = () => combineReducers({
    splitViewStore: persistReducer(persistSplitViewConfig, splitViewStore),
});

export default createRootReducer;
