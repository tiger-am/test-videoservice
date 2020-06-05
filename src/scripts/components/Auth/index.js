import React, {useCallback, useEffect, useState} from 'react';
import {useStorage} from "hooks/useStorage";
import Component from "components/Auth/Component";
import AuthModal from "components/Auth/AuthModal";
import {clearUser, setUserLogin, setUser} from "actions/user";
import {useDispatch, useSelector} from "react-redux";

const useAuth = () => {
    const {getData} = useStorage();

    const userStorage = getData('user')
    const isLoggedIn = !!userStorage;

    return {
        isLoggedIn,
        userStorage
    }
}

export default function Auth() {

    const {setData, removeData} = useStorage();
    const dispatch = useDispatch();
    const user = useSelector(({user}) => user);
    const {isLoggedIn, userStorage} = useAuth();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(isLoggedIn);
    const [isEditLogin, setIsEditLogin] = useState(false);

    const handleLogin = useCallback(() => {
        setIsEditLogin(true)
    }, [setIsEditLogin])

    const openModal = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen])

    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen])

    const logout = useCallback(() => {
        removeData('user')
        dispatch(clearUser())
        setLoggedIn(false)
    }, [removeData, clearUser, dispatch, setLoggedIn])

    const changeLogin = useCallback((e) => {
        dispatch(setUserLogin(e.target.value))
    }, [dispatch, setUserLogin])

    const applyNewLogin = useCallback(() => {
        setIsEditLogin(false)
    }, [setIsEditLogin])

    const login = useCallback((e) => {
        e.preventDefault();
        //TODO перевести логин на sessionStorage если remember: false

        setData('user', {...user})
        setLoggedIn(true)
        closeModal()
    }, [setData, setLoggedIn])

    const handleChange = useCallback((e) => {
        const field = e.target.name;
        const value = field === 'remember' ? e.target.checked : e.target.value
        dispatch(setUser({...user, [field]: value}))
    }, [dispatch, setUser])

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(setUser(userStorage))
        }
    }, []);

    return (
        <div className="auth">
            <Component
                user={user}
                applyNewLogin={applyNewLogin}
                changeLogin={changeLogin}
                handleLogin={handleLogin}
                isEditLogin={isEditLogin}
                loggedIn={loggedIn}
                logout={logout}
                openModal={openModal}
            />
            <AuthModal
                closeModal={closeModal}
                handleChange={handleChange}
                login={login}
                modalIsOpen={modalIsOpen}
            />
        </div>
    )
}