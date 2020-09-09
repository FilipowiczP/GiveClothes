import React, { useState } from 'react';
import './scss/footer.scss';
import decoration from '../images/Decoration.svg';

const Footer = () =>{
    
    const [send, setSend] = useState (false);

    const handleClick = () =>{
        setSend(true);
    }

    return(
        <footer className="footer" id="footer">
            <div className="footer__content">
                <h1 className="footer__content__title">Skontaktuj się z nami</h1>
                <img src={decoration} alt="decoration" className="footer__content__decoration" />
                <form className="footer__content__form">
                    <div className="footer__content__form__box">
                        <div className="footer__content__form__layout">
                            <label for="name" className="footer__content__form__label">Wpisz swoję imię</label>
                            <input type="text" id="name" placeholder="Krzysztof" className="footer__content__form__input" />
                        </div>
                        <div className="footer__content__form__layout">
                            <label for="email" className="footer__content__form__label">Wpisz swój email</label>
                            <input type="email" id="email" placeholder="abc@xyz.pl" className="footer__content__form__input" />
                        </div>

                    </div>
                    <div className="footer__content__form__area">
                        <label for="textArea">Wpisz swoją wiadomość </label>
                        <textarea className="footer__content__form__textarea" id="textArea" placeholder="Lorem ipsum dolor sit amet, consectetur 
                         adipiscing elit, sed do eiusmod tempor incididunt ut 
                         labore et dolore magna aliqua. Ut enim ad minim veniam, 
                         quis nostrud exercitation ullamco laboris nisi ut aliquip
                         ex ea commodo consequat."></textarea>

                    </div>
                    <p className={send ? "footer__content__form__send" : "footer__content__form__send-hide"}>Wiadomość wysłana</p>
                    <button type="submit" onClick={handleClick} className="footer__content__form__submit">Wyślij</button>
                </form>
            </div>
        </footer>
    );
}

export default Footer;