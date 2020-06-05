const initialState = {
    films: [],
    genres: [],
    error: '',
};

const LOADED_GENRES_SUCCESS = (state = initialState, {payload}) => ({
    ...state,
    genres: payload,
    error: '',
});

const LOADED_GENRES_FAILURE = (state = initialState, {payload}) => ({
    ...state,
    genres: [],
    error: payload
});

const LOADED_FILMS_SUCCESS = (state = initialState, {payload}) => ({
    ...state,
    films: payload,
    error: '',
});

const LOADED_FILMS_FAILURE = (state = initialState, {payload}) => ({
    ...state,
    films: [],
    error: payload
});

const identity = (state = initialState) => state;

const reducers = {
    LOADED_FILMS_SUCCESS,
    LOADED_FILMS_FAILURE,
    LOADED_GENRES_SUCCESS,
    LOADED_GENRES_FAILURE,
};

export default function (state, action) {
    const reducerImpl = reducers[action.type] || identity;
    return reducerImpl(state, action)
}
