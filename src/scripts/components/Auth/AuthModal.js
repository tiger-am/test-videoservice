import React from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ({modalIsOpen, closeModal, login, handleChange}) {
    return (
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
    )
}