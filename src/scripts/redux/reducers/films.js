const initialState = {
    films: [],
    genres: [],
    comments: [],
    error: '',
};

const LOADED_GENRES_SUCCESS = (state = initialState, { payload }) => ({
    ...state,
    genres: payload,
    error: '',
});

const LOADED_GENRES_FAILURE = (state = initialState, { payload }) => ({
    ...state,
    genres: [],
    error: payload
});

const LOADED_FILMS_SUCCESS = (state = initialState, { payload }) => ({
    ...state,
    films: payload,
    error: '',
});

const LOADED_FILMS_FAILURE = (state = initialState, { payload }) => ({
    ...state,
    films: [],
    error: payload
});

const LOADED_COMMENTS_SUCCESS = (state = initialState, { payload }) => ({
    ...state,
    comments: payload,
    error: '',
});

const LOADED_COMMENTS_FAILURE = (state = initialState, { payload }) => ({
    ...state,
    comments: [],
    error: payload
});

const ADD_COMMENT = (state = initialState, { payload }) => ({
    ...state,
    comments: [
        { ...payload },
        ...state.comments,
    ]
});

const REMOVE_COMMENT = (state = initialState, { payload }) => {
    const idx = state.comments.findIndex(({ id }) => id === payload);

    return ({
        ...state,
        comments: [
            ...state.comments.slice(0, idx),
            ...state.comments.slice(idx + 1),
        ]
    });
};

const identity = (state = initialState) => state;

const reducers = {
    LOADED_FILMS_SUCCESS,
    LOADED_FILMS_FAILURE,
    LOADED_GENRES_SUCCESS,
    LOADED_GENRES_FAILURE,
    LOADED_COMMENTS_SUCCESS,
    LOADED_COMMENTS_FAILURE,
    ADD_COMMENT,
    REMOVE_COMMENT
};

export default function (state, action) {
    const reducerImpl = reducers[action.type] || identity;
    return reducerImpl(state, action);
}
