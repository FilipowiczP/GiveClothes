import React from 'react';
import Navigation from '../Home/Navigation';
import decoration from '../images/Decoration.svg';

const Register = () =>{
    return(
        <>
            <Navigation />
            <main className="register">
                <h1 className="register__title">Załóż kotno</h1>
                <img src={decoration} alt="decoration" />
                <form className="register__form">
                    <label for="email">Email</label>
                    <input type="email" id="email" />
                    
                    <label for="password">Email</label>
                    <input type="password" id="password" />
                   
                    <label for="repeatPassword">Email</label>
                    <input type="password" id="repeatPassword" />

                </form>
            </main>
        </>
    );
};

export default Register;