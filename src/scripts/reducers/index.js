import {types} from "utils";


const initialState = {
    error: '',
    loading: false,
    films: []
}

export default function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case types.FETCH_FILMS_REQUEST:
            return {
                ...state,
                films: [],
                loading: true,
                error: ''
            };
        case types.FETCH_FILMS_SUCCESS:
            return {
                ...state,
                films: payload,
                loading: false,
                error: ''
            };
        case types.FETCH_FILMS_FAILURE:
            return {
                ...state,
                films: [],
                loading: false,
                error: payload
            };
        default:
            return state
    }
}