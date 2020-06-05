const initialState = {
    films: [],
    error: '',
}

const LOADED_FILMS_SUCCESS = (state = initialState, {payload}) => ({
    ...state,
    films: payload,
    error: '',
})

const LOADED_FILMS_FAILURE = (state = initialState, {payload}) => ({
    ...state,
    films: [],
    error: payload
})

const identity = (state = initialState) => state

const reducers = {
    LOADED_FILMS_SUCCESS,
    LOADED_FILMS_FAILURE
}

export default function (state, action) {
    const reducerImpl = reducers[action.type] || identity;
    return reducerImpl(state, action)
}
