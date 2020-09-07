import React from 'react';
import {Link} from 'react-scroll';
import './scss/navigation.scss';

const Navigation = () =>{
    return(
        <nav className="nav">
            <ul className="nav__list">
                <Link className="nav__list__item"  activeClass="active" to="" smooth={true} offset={0} duration={500}>Start</Link>
                <Link className="nav__list__item" activeClass="active" to="" smooth={true} offset={0} duration={500}>O co chodzi?</Link>
                <Link className="nav__list__item" activeClass="active" to="" smooth={true} offset={0} duration={500}>O nas</Link>
                <Link className="nav__list__item" activeClass="active" to="" smooth={true} offset={0} duration={500}>Fundacja i organizacja</Link>
                <Link className="nav__list__item" activeClass="active" to="" smooth={true} offset={0} duration={500}>Kontakt</Link>
            </ul>
        </nav>
    )
}

export default Navigation;