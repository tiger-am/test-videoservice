import React, { useCallback, useState } from 'react';
import Component from "components/Auth/Component";
import AuthModal from "components/Auth/AuthModal";
import { clearUser, setUserLogin, setUser } from "actions/user";
import { useDispatch, useSelector } from "react-redux";

const useAuth = () => {
    const user = useSelector(({ user }) => user);
    const isLoggedIn = !!user.id;

    return {
        isLoggedIn,
        user
    }
};

export default function Auth() {

    const dispatch = useDispatch();
    const { isLoggedIn, user } = useAuth();
    const [ modalIsOpen, setIsOpen ] = useState(false);
    const [ loggedIn, setLoggedIn ] = useState(isLoggedIn);
    const [ isEditLogin, setIsEditLogin ] = useState(false);
    const [ loginForm, setLoginForm ] = useState({});
    const [ newLogin, setNewLogin ] = useState(user.login);

    const handleLogin = useCallback(() => {
        setIsEditLogin(true);
        setNewLogin(user.login);
    }, [ setIsEditLogin, setNewLogin, user ]);

    const openModal = useCallback(() => {
        setIsOpen(true);
    }, [ setIsOpen ]);

    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, [ setIsOpen ]);

    const changeLogin = useCallback((e) => {
        setNewLogin(e.target.value);
    }, [ setNewLogin ]);

    const applyNewLogin = useCallback(() => {
        setIsEditLogin(false);

        if (newLogin) {
            dispatch(setUserLogin(newLogin))
        } else {
            setNewLogin(user.login);
        }
    }, [ setIsEditLogin, dispatch, setUserLogin, newLogin, setNewLogin ]);

    const login = useCallback((e) => { //TODO перевести логин на sessionStorage если remember: false
        e.preventDefault();

        if (!loginForm.login) return;

        dispatch(setUser(loginForm));
        setLoggedIn(true);
        setNewLogin(loginForm.login);
        closeModal()
    }, [ setLoggedIn, loginForm, setNewLogin ]);

    const logout = useCallback(() => {
        dispatch(clearUser());
        setLoggedIn(false)
    }, [ clearUser, dispatch, setLoggedIn ]);

    const handleChange = useCallback((e) => {
        const field = e.target.name;
        const value = field === 'remember' ? e.target.checked : e.target.value;

        setLoginForm({ ...loginForm, [ field ]: value })
    }, [ dispatch, setUser ]);

    return (
        <div className="auth">
            <Component
                login={newLogin}
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