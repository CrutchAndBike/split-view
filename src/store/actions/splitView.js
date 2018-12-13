import { createAction } from 'redux-actions';

import {
    SET_IS_FINISHED,
    SET_USER_INFO,
    SET_QUESTIONS,
    SET_FIELDS
} from '../reducers/splitView';

export const showResult = createAction(SET_IS_FINISHED, () => true);
export const saveUser = createAction(SET_USER_INFO);
export const setQuestions = createAction(SET_QUESTIONS);
const saveFieldList = createAction(SET_FIELDS);

export const addFieldList = componentType => (dispatch, getState) => {
    const fieldList = getState().splitViewStore.fieldList;
    fieldList.push(componentType);
    dispatch(saveFieldList(fieldList));
};

export const deleteFieldList = deletingItemIndex => (dispatch, getState) => {
    const fieldList = getState().splitViewStore.fieldList;
    const newFieldList = fieldList.filter((fild, index) => index !== deletingItemIndex);
    dispatch(saveFieldList(newFieldList));
};