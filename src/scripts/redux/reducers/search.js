const initialState = {
    filter: ''
}

const SET_FILTER = (state, {payload}) => ({
    filter: payload
})

const identity = (state = initialState) => state

const reducers = {
    SET_FILTER
}

export default function (state, action) {
    const reducerImpl = reducers[action.type] || identity;
    return reducerImpl(state, action)
}
