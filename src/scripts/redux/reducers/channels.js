const initialState = {
    channels: [],
    error: '',
};

const LOADED_CHANNELS_SUCCESS = (state = initialState, {payload}) => ({
    ...state,
    channels: payload,
    error: '',
});

const LOADED_CHANNELS_FAILURE = (state = initialState, {payload}) => ({
    ...state,
    channels: [],
    error: payload
});

const identity = (state = initialState) => state;

const reducers = {
    LOADED_CHANNELS_SUCCESS,
    LOADED_CHANNELS_FAILURE,
};

export default function (state, action) {
    const reducerImpl = reducers[action.type] || identity;
    return reducerImpl(state, action)
}
