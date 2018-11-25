import { createAction } from 'redux-actions';

import {
    SET_IS_FINISHED
} from '../reducers/splitView';

export const showResult = createAction(SET_IS_FINISHED, () => true);
