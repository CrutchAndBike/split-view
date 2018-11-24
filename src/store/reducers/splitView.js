const INITIAL_STATE = { };

const ACTION_HANDLERS = { };

export default (state = INITIAL_STATE, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};
