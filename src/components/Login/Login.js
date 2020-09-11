import React from 'react';
import Navigation from '../Home/Navigation';
import './scss/login.scss';
import decoration from '../images/Decoration.svg';
import { Link } from 'react-router-dom';

const Login = () =>{
    return(
        <>
            <Navigation />
            <main className="login">
                <h1 className="login__title">Zaloguj</h1>
                <img src={decoration} alt="decoration" className="login__decoration" />
                <form className="login__form">
                    <label for="email" className="login__form__label">Email</label>
                    <input type="email" id="email" className="login__form__input"></input> 
                    <label for="password" className="login__form__label">Hasło</label>
                    <input type="password" id="password" className="login__form__input"></input> 
                </form>
                <div className="login__box">
                    <Link to="/register" className="login__box__link">Załóż konto</Link>
                    <Link to="/login" className="login__box__link">Zaloguj</Link>
                </div>
            </main>
        </>
    );
}

export default Login;;