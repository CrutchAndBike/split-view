import { createAction } from 'redux-actions';

import {
	SET_IS_FINISHED,
	SET_USER_INFO,
	SET_QUESTIONS,
} from '../reducers/splitView';

export const showResult = createAction(SET_IS_FINISHED, () => true);
export const saveUser = createAction(SET_USER_INFO);
export const setQuestions = createAction(SET_QUESTIONS);