import React from 'react';
import './scss/footer.scss';
import decoration from '../images/Decoration.svg';

const Footer = () =>{
    return(
        <footer className="footer" id="footer">
            <div className="footer__content">
                <h1>Skontaktuj się z nami</h1>
                <img src={decoration} alt="decoration" />
                <form className="footer__content__form">
                    <div className="footer__content__form__layout">
                        <label for="name">Wpisz swoję imię</label>
                        <input type="text" id="name" />
                        <label for="email">Wpisz swój email</label>
                        <input type="email" id="email" />
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