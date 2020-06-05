import {SET_USER, CLEAR_USER, SET_USER_LOGIN} from '../actionTypes'

const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

const clearUser = () => ({
    type: CLEAR_USER
});

const setUserLogin = (login) => ({
    type: SET_USER_LOGIN,
    payload: login
})

export {
    setUser,
    setUserLogin,
    clearUser
}

