import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logo">
                    <img src="/src/images/htc-logo.svg" alt="htc-logo"/>
                </div>

                <div className="footer__content">
                    <address className="footer__text">
                        426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)
                    </address>

                    <p className="footer__text">
                        <a href="tel:+73412938861">+7 (3412) 93-88-61</a>, <a href="tel:+73412432929">43-29-29</a>
                    </p>

                    <p className="footer__htc">
                        <a href="http://htc-cs.ru">htc-cs.ru</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}