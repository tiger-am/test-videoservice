const initialState = {}

const SET_USER_LOGIN = (state = initialState, {payload}) => ({
    ...state,
    login: payload
})

const SET_USER = (state = initialState, {payload}) => ({
    ...payload,
    id: 123
})

const CLEAR_USER = () => initialState

const identity = (state = initialState) => state

const reducers = {
    SET_USER_LOGIN,
    CLEAR_USER,
    SET_USER
}

export default function (state, action) {
    const reducerImpl = reducers[action.type] || identity;
    return reducerImpl(state, action)
}