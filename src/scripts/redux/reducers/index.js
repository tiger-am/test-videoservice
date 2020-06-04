const initialState = {
    films: [],
    error: '',
}

const FETCH_FILMS_REQUEST = (state) => ({
    ...state,
    films: [],
})

const FETCH_FILMS_SUCCESS = (state, {payload}) => ({
    ...state,
    films: payload,
})

const FETCH_FILMS_FAILURE = (state, {payload}) => ({
    ...state,
    films: [],
    error: payload
})

const identity = () => initialState

const reducers = {
    FETCH_FILMS_REQUEST,
    FETCH_FILMS_SUCCESS,
    FETCH_FILMS_FAILURE
}

export default function (state, action) {
    const reducerImpl = reducers[action.type] || identity;
    return reducerImpl(state, action)
}
