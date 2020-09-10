import React from 'react';
import { Link } from 'react-router-dom';

const NavPages = () =>{
    return(
        <>
            <Link to="/">Główna</Link>       
            <Link to="/login">Zaloguj</Link>       
            <Link to="/register">Zarejstruj</Link>       
        </>
    );
};

export default NavPages;