import React from 'react';
import './scss/navPages.scss';

import { Link } from 'react-router-dom';

const NavPages = ({user}) =>{


    if (user) {
        return(
            <>
                <p>Cześć {user}</p>
                <Link to='/logout' className="navPages">Wyloguj</Link>
                <Link className="navPages" to="/">Główna</Link>       
            </>
        );
    }else {
        return(
            <>
                <Link className="navPages" to="/">Główna</Link>       
                <Link className="navPages" to="/login">Zaloguj</Link>       
                <Link className="navPages" to="/register">Zarejstruj</Link>       
            </>
    )};
};

export default NavPages;