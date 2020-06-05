import React from 'react';
import {Link} from "react-router-dom";

import Auth from "components/Auth";
import Search from "components/Search";


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
                    <Search/>
                </div>

                <div className="header__auth">
                    <Auth/>
                </div>
            </div>
        </header>
    )
}
