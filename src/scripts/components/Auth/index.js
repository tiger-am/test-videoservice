import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Modal from 'react-modal';
import {useStorage} from "services";

Modal.setAppElement('#root');

const useAuth = (getData) => {
    const isLoggedIn = !!getData('user');

    return {
        isLoggedIn
    }
}

export default function Auth() {
    const initialUser = {
        id: 123,
        login: '',
        password: '',
        remember: ''
    }
    const {getData, setData, removeData} = useStorage();
    const {isLoggedIn} = useAuth(getData);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(isLoggedIn);
    const [user, setUser] = useState(initialUser);
    const [isEditLogin, setIsEditLogin] = useState(false);

    const handleLogin = () => {
        setIsEditLogin(true)
    }

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const logout = () => {
        removeData('user')
        setLoggedIn(false)
    }

    const changeLogin = (e) => {
        setUser({
            ...user,
            login: e.target.value
        })
    }

    const applyNewLogin = (e) => {
        setData('user', {...user})
        setIsEditLogin(false)
    }

    const login = (e) => {
        e.preventDefault();
        //TODO перевести логин на sessionStorage если remember: false
        //TODO отправить данные в redux

        setData('user', {...user})
        setLoggedIn(true)
    }

    const handleChange = (e) => {
        const field = e.target.name;
        const value = field === 'remember' ? e.target.checked : e.target.value
        setUser({...user, [field]: value})
    }

    useEffect(() => {
        const user = getData('user');

        if (!user) return

        setUser({...user})
        setLoggedIn(true)

    }, [loggedIn]);

    return (
        <>
            {loggedIn
                ? (
                    <div className="auth">

                        {isEditLogin ? (
                            <label className="input input--auth">
                                <input
                                    autoFocus
                                    type="text"
                                    className="input__field"
                                    value={user.login}
                                    onChange={changeLogin}
                                    onBlur={applyNewLogin}
                                />
                            </label>
                        ) : (
                            <span
                                style={{fontWeight: 500}}
                                onClick={handleLogin}
                            >
                                {user.login}
                            </span>
                        )}

                        <button
                            style={{marginLeft: 16}}
                            onClick={logout}
                            type="button"
                            className="btn btn--secondary"
                        >
                            Выйти
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="auth">
                            <button
                                onClick={openModal}
                                type="button"
                                className="btn btn--primary"
                            >
                                Войти
                            </button>
                        </div>

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Авторизация"
                            portalClassName="modal"
                            overlayClassName="modal__overlay"
                            className="modal__content"
                            bodyOpenClassName="open-modal"
                        >
                            <button type="button" className="modal__close"/>

                            <form className="modal__form" onSubmit={login}>
                                <h2 className="modal__title">Вход</h2>

                                <label className="input">
                                    <input
                                        type="text"
                                        className="input__field"
                                        name="login"
                                        placeholder="Логин"
                                        onChange={handleChange}
                                    />
                                </label>

                                <label className="input">
                                    <input
                                        type="password"
                                        className="input__field"
                                        name="password"
                                        onChange={handleChange}
                                        placeholder="Пароль"
                                    />
                                </label>

                                <label className="checkbox">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        id="remember"
                                        onChange={handleChange}
                                        defaultChecked={false}
                                    />

                                    <span>Запомнить</span>
                                </label>

                                <div className="modal__footer">
                                    <button type="submit" className="btn btn--primary">Войти</button>
                                </div>
                            </form>
                        </Modal>
                    </>
                )}

        </>
    )
}