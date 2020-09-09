import React from 'react';
import './scss/footer.scss';
import decoration from '../images/Decoration.svg';

const Footer = () =>{
    return(
        <footer className="footer" id="footer">
            <div className="footer__content">
                <h1 className="footer__content__title">Skontaktuj się z nami</h1>
                <img src={decoration} alt="decoration" className="footer__content__decoration" />
                <form className="footer__content__form">
                    <div className="footer__content__form__layout">

                        <label for="name" className="footer__content__form__label">Wpisz swoję imię</label>
                        <input type="text" id="name" className="footer__content__form__input" />

                        <label for="email" className="footer__content__form__label">Wpisz swój email</label>
                        <input type="email" id="email" className="footer__content__form__input" />
                    </div>
                    <textarea className="footer__content__form__textarea" placeholder="Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip
                     ex ea commodo consequat."></textarea>
                    <button type="submit" className="footer__content__form__submit">Wyślij</button>
                </form>
            </div>
        </footer>
    );
}

export default Footer;