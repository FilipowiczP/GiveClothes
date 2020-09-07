import React from 'react';
import {Link} from 'react-scroll';
import decoration from '../images/Decoration.svg';
import './scss/main.scss';
import Navigation from './Navigation';

const Main = () => {
    return(
        <main className="main" id="main">
            <header className="main__header">
            <Navigation />
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