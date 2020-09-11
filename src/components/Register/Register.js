import React from 'react';
import Navigation from '../Home/Navigation';
import decoration from '../images/Decoration.svg';
import { Link } from 'react-router-dom';
import './register.scss';

const Register = () =>{
    return(
        <>
            <Navigation />
            <main className="register">
                <h1 className="register__title">Załóż kotno</h1>
                <img src={decoration} alt="decoration" className="register__decoration" />
                <form className="register__form">
                    <label for="email" className="register__form__label">Email</label>
                    <input type="email" id="email" className="register__form__input"/>
                    
                    <label for="password" className="register__form__label">Hasło</label>
                    <input type="password" id="password" className="register__form__input" />
                   
                    <label for="repeatPassword" className="register__form__label">Powtórz hasło</label>
                    <input type="password" id="repeatPassword" className="register__form__input" />

                </form>
                <div className="register__box">
                    <Link to="/login" className="register__box__link">Zaloguj</Link>
                    <Link to="/register" className="register__box__link">Załóż konto</Link>
                </div>
            </main>
        </>
    );
};

export default Register;