import { createAction } from 'redux-actions';

import {
    SET_IS_FINISHED,
    SET_USER_INFO,
    SET_FIELDS
} from '../reducers/splitView';

export const showResult = createAction(SET_IS_FINISHED, () => true);
export const saveUser = createAction(SET_USER_INFO);
const saveFieldList = createAction(SET_FIELDS);

export const addFieldList = type => (dispatch, getState) => {
    const fieldList = getState().splitViewStore.fieldList;
    const length = fieldList.length;
    fieldList.push({ index: (length > 0 && fieldList[length - 1].index + 1) || 0, type });
    dispatch(saveFieldList(fieldList));
};

export const deleteFieldList = deletingItemIndex => (dispatch, getState) => {
    const fieldList = getState().splitViewStore.fieldList;
    const newFieldList = fieldList.filter((fild, index) => index !== deletingItemIndex);
    dispatch(saveFieldList(newFieldList));
};

export const saveQuestion = (index, changedData) => (dispatch, getState) => {
    const fieldList = getState().splitViewStore.fieldList;
    const foundIndex = fieldList.findIndex(field => field.index === index);
    fieldList[foundIndex] = { ...fieldList[foundIndex], ...changedData };
    dispatch(saveFieldList(fieldList));
};
