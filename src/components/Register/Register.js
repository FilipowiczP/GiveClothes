import React, { useState } from 'react';
import './register.scss';

import Navigation from '../Home/Navigation';
import decoration from '../images/Decoration.svg';

import { Link } from 'react-router-dom';
import firebase from '../../firebase';

const Register = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event) =>{
        event.preventDefault();

        firebase.firestore().collection('profile').add({
            email,
            password
        })
        .then(()=>{
            setEmail('')
            setPassword('')
        })
    }
    return(
        <>
            <Navigation />
            <main className="register">
                <h1 className="register__title">Załóż kotno</h1>
                <img src={decoration} alt="decoration" className="register__decoration" />
                <form className="register__form" onSubmit={onSubmit}>
                    <label for="email" className="register__form__label">Email</label>
                    <input type="email" id="email" className="register__form__input" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
                    
                    <label for="password" className="register__form__label">Hasło</label>
                    <input type="password" id="password" className="register__form__input" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                   
                    <label for="repeatPassword" className="register__form__label">Powtórz hasło</label>
                    <input type="password" id="repeatPassword" className="register__form__input" />
                    <button type="submit">Załóż konto</button>
                </form>
                <div className="register__box">
                    <Link to="/login" className="register__box__link">Zaloguj</Link>
                    {/* <Link to="/register" className="register__box__link">Załóż konto</Link> */}
                </div>
            </main>
        </>
    );
};

export default Register;