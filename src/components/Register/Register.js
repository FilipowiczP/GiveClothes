import React, { useState } from 'react';
import './register.scss';

import Navigation from '../Home/Navigation';
import decoration from '../images/Decoration.svg';

import { Link } from 'react-router-dom';
import firebase from '../../firebase';

const Register = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const onSubmit = (event) =>{
        event.preventDefault();
        
        if(email.length < 15){

            setErrorEmail(true);

        }else if(password !== repeatPassword){

            setErrorPassword(true);

        }else{
            setErrorPassword(false);
            firebase.firestore().collection('profile').add({
                email,
                password
            })
            .then(()=>{
                setEmail('');
                setPassword('');
                setRepeatPassword('');
            })
        }
    }
    
    return(
        <>
            <Navigation />
            <main className="register">
                <h1 className="register__title">Załóż kotno</h1>
                <img src={decoration} alt="decoration" className="register__decoration" />
                <form className="register__form" onSubmit={onSubmit}>
                    <p className={errorEmail ? "register__form__validation-error" : "register__form__validation"}>Nie poprawny email</p>
                   
                    <label for="email" className="register__form__label">Email</label>
                    <input type="email" id="email" className="register__form__input" value={email} onChange={e => setEmail(e.currentTarget.value)}/> 

                    <p className={errorPassword ? "register__form__validation-error" : "register__form__validation"}>Nie poprawne hasło</p>
                    
                    <label for="password" className="register__form__label">Hasło</label>
                    <input type="password" id="password" className="register__form__input" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                   
                    <label for="repeatPassword" className="register__form__label">Powtórz hasło</label>
                    <input type="password" id="repeatPassword" className="register__form__input" value={repeatPassword} onChange={e => setRepeatPassword(e.currentTarget.value)} />
                   
                    <button type="submit">Załóż konto</button>
                </form>

                <Link to="/login" className="register__link">Zaloguj</Link>

            </main>
        </>
    );
};

export default Register;