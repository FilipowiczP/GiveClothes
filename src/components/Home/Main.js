import React from 'react';
import homeImg from '../images/home.png'
import {Link} from 'react-scroll';
import './scss/main.scss';

const Main = () => {
    return(
        <main className="main" id="main">
            <div className="main__box">
                <img src={homeImg} className="main__box__image" />
            </div>
            <div>
                <header className="main__header">
                    <div>
                        <p>Zaloguj</p>
                    </div>
                    <nav className="main__nav">
                        <ul className="main__nav__list">
                            <Link className="main__nav__list__item"  activeClass="active" to="" smooth={true} offset={0} duration={500}>Start</Link>
                            <Link className="main__nav__list__item" activeClass="active" to="" smooth={true} offset={0} duration={500}>O co chodzi?</Link>
                            <Link className="main__nav__list__item" activeClass="active" to="" smooth={true} offset={0} duration={500}>O nas</Link>
                            <Link className="main__nav__list__item" activeClass="active" to="" smooth={true} offset={0} duration={500}>Fundacja i organizacja</Link>
                            <Link className="main__nav__list__item" activeClass="active" to="" smooth={true} offset={0} duration={500}>Kontakt</Link>
                        </ul>
                    </nav>
                </header>
            </div>
        </main>
    );
}

export default Main;