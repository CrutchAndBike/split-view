export const SET_IS_FINISHED = 'SET_IS_FINISHED';

const INITIAL_STATE = { 
    isFinished: false
};

const ACTION_HANDLERS = { 
    [SET_IS_FINISHED]: (state, { payload }) => ({
        ...state,
        isFinished: payload
    })
};

export default (state = INITIAL_STATE, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};
