import React from 'react';
import './scss/footer.scss';
import decoration from '../images/Decoration.svg';

const Footer = () =>{
    return(
        <footer className="footer" id="footer">
            <div className="footer__content">
                <h1>Skontaktuj się z nami</h1>
                <img src={decoration} alt="decoration" />
                <form>

                </form>
            </div>
        </footer>
    );
}

export default Footer;