export const SET_IS_FINISHED = 'SET_IS_FINISHED';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_FIELDS = 'SET_FIELDS';

const INITIAL_STATE = {
    isFinished: false,
    userInfo: {},
    fieldList: []
};

const ACTION_HANDLERS = {
    [SET_IS_FINISHED]: (state, { payload }) => ({
        ...state,
        isFinished: payload
    }),
    [SET_USER_INFO]: (state, { payload }) => ({
        ...state,
        userInfo: payload
    }),
    [SET_FIELDS]: (state, { payload }) => ({
        ...state,
        fieldList: [...payload]
    })
};

export default (state = INITIAL_STATE, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};