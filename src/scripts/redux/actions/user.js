import { SET_USER, CLEAR_USER, SET_USER_LOGIN } from '../actionTypes'
import { useStorage } from "hooks/useStorage";

const { setData, removeData, getData } = useStorage();

const setUser = (user) => {
    setData('user', user);

    return {
        type: SET_USER,
        payload: user
    }
};

const clearUser = () => {
    removeData('user');

    return {
        type: CLEAR_USER
    }
};

const setUserLogin = (login) => {
    const user = getData('user');

    setData('user', { ...user, login });

    return {
        type: SET_USER_LOGIN,
        payload: login
    }
};

export {
    setUser,
    setUserLogin,
    clearUser
}

