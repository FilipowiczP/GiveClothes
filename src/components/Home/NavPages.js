import React from 'react';
import './scss/navPages.scss';
import firebase from '../../firebase';

import { Link } from 'react-router-dom';

const NavPages = ({user}) =>{


    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            return(
                <>
                    <p>Cześć {user}</p>
                    <Link to='/logout'>Wyloguj</Link>
                </>
            );
        }else {
            return(
                <>
                    <Link className="navPages" to="/">Główna</Link>       
                    <Link className="navPages" to="/login">Zaloguj</Link>       
                    <Link className="navPages" to="/register">Zarejstruj</Link>       
                </>
            );
        }
    });

};

export default NavPages;