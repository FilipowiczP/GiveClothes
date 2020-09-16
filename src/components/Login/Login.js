import React, { useState } from 'react';
import firebase from '../../firebase';
import './scss/login.scss';

import decoration from '../images/Decoration.svg';

import Navigation from '../Home/Navigation';

const Login = () =>{

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [user, setUser] = useState('');

    const onSubmit = (event) =>{

        event.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
            setUser(email);
        }).catch(function(error){
            
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode + " " + errorMessage);
        })
    }

    return(
        <>
            <Navigation user={user}/>
            <main className="login">
                <h1 className="login__title">Zaloguj</h1>
                <img src={decoration} alt="decoration" className="login__decoration" />

                <form className="login__form" onSubmit={onSubmit}>
                    <label for="email" className="login__form__label">Email</label>
                    <input type="email" id="email" className="login__form__input" value={email} onChange={e => setEmail(e.currentTarget.value)}/> 

                    <label for="password" className="login__form__label">Hasło</label>
                    <input type="password" id="password" className="login__form__input" value={password} onChange={e => setPassword(e.currentTarget.value)}/> 

                    <button type="submit" className="login__form__button">Zaloguj</button>
                </form>
            </main>
        </>
    );
}

export default Login;