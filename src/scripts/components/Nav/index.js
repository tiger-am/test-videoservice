import {NavLink} from "react-router-dom";
import React from "react";

export default function Nav() {
    return (
        <nav>
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <NavLink to="/films" className="nav-list__link" activeClassName="nav-list__link--active">
                            Фильмы
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/channels" className="nav-list__link" activeClassName="nav-list__link--active">
                            Телеканалы
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}
