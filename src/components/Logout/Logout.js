import React from 'react';
import './logout.scss';
import { Link } from 'react-router-dom';

import decoration from '../images/Decoration.svg';

const Logout = () =>{
    return(
        <main className="logout">
            <h1 className="logout__title">Wylogowanie nastąpiło pomyślnie!</h1>
            <img src={decoration} alt="decoration" className="logout__img" />
            <Link to="/" className="logout__link">Strona główna</Link>
        </main>
    );
};

export default Logout;