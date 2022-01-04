import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './blocks/Navigation';
import Social from './blocks/Social';





function Footer() {
    return (
        <footer className="main-footer hidden-sm hidden-xs">
            <div className="container flex-block flex-gap">
                <div className="contacts">
                    <div className="contacts__wrapper">
                        <Link to="/">
                            <div className="logo">
                                <img src="img/Logo1.png" alt="FooterLogo" />
                            </div>
                        </Link>
                        <div className="phone">
                            <div className="ya-phone">
                                <a href="tel:+79999999999">+7 (999) 999-99-99</a>
                                <p><a href="mailto:@mail.ru">@mail.ru</a></p>
                                <p>Адресс</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-navigation castomFooter" >
                    <Navigation />
                    <div className="social-block flex-block flex-v-middle flex-end">
                        <div className="title">Мы в соцсетях</div>
                        <Social />
                    </div>
                </div>

            </div>
        </footer>
    )

}
export default Footer;