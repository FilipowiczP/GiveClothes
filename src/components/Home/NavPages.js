import React, { useState } from 'react';
import './scss/navPages.scss';
import firebase from '../../firebase';

import { Link } from 'react-router-dom';

const NavPages = () =>{

    const [login, setLogin] = useState(null)

    firebase.auth().onAuthStateChanged(function(user) {
        setLogin(user.email);
    });

    if (login) {
        return(
            <>
                <p>Cześć {login}</p>
                <Link to='/logout' className="navPages">Wyloguj</Link>
                <Link className="navPages" to="/">Główna</Link>       
            </>
        );
    } else {
        return(
            <>
                <Link className="navPages" to="/">Główna</Link>       
                <Link className="navPages" to="/login">Zaloguj</Link>       
                <Link className="navPages" to="/register">Zarejstruj</Link>       
            </>
        )
    };
};

export default NavPages;