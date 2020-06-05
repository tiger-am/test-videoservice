import {SET_FILTER} from '../actionTypes'

const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter
});

export {
    setFilter
}
