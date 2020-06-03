import React from 'react';
import {Link} from "react-router-dom";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Header() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/films" className="logo">
                        <img src="/src/images/logo.svg" width="36" height="36" alt="VideoService"/>

                        <span>Видеосервис</span>
                    </Link>
                </div>

                <div className="header__search">
                    <form
                        className="search"
                        // onSubmit={}
                    >
                        <label className="input">
                            <input type="text" className="input__field" placeholder="Поиск..."/>
                        </label>

                        <button type="submit" className="btn btn--secondary">Найти</button>
                    </form>
                </div>

                <div className="header__auth">
                    <div className="auth">
                        <button onClick={openModal} type="button" className="btn btn--primary">Войти</button>
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

                        <form className="modal__form">
                            <h2 className="modal__title">Вход</h2>

                            <label className="input">
                                <input
                                    type="text"
                                    className="input__field"
                                    name="login"
                                    placeholder="Логин"
                                />
                            </label>

                            <label className="input">
                                <input
                                    type="password"
                                    className="input__field"
                                    name="password"
                                    placeholder="Пароль"
                                />
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                    defaultChecked={false}
                                />

                                <span>Запомнить</span>
                            </label>

                            <div className="modal__footer">
                                <button type="submit" className="btn btn--primary">Войти</button>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>
        </header>
    )
}