import React from 'react';
import decoration from '../images/Decoration.svg';
import {Link} from 'react-scroll';
import './scss/main.scss';

const Main = () => {
    return(
        <main className="main" id="main">
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
            <div className="main__content">
                    <h1 className="main__content__text">Zacznij pomagać</h1>
                    <h1 className="main__content__text">Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decoration} alt="decoration" />
                <div className="main__content__box">
                    <Link className="main__content__box__link"  activeClass="active" to="" smooth={true} offset={0} duration={500}>Oddaj rzeczy</Link>
                    <Link className="main__content__box__link"  activeClass="active" to="" smooth={true} offset={0} duration={500}>Zorganizuj zbiórkę</Link>
                </div>
            </div>
        </main>
    );
}

export default Main;