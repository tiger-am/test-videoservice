import React from 'react';
import {Link} from "react-router-dom";

import Auth from "components/Auth";

export default function Header() {


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
                    <Auth/>
                </div>
            </div>
        </header>
    )
}
