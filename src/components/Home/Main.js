import React from 'react';
import {Link} from 'react-scroll';
import './scss/main.scss';

import decoration from '../images/Decoration.svg';
import Navigation from './Navigation';
import GiveClothesLink from '../GiveClothes/GiveClothesLinks'

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
                    <GiveClothesLink />
                    <Link className="main__content__box__link"  activeClass="active" to="" smooth={true} offset={0} duration={500}>Zorganizuj zbiórkę</Link>
                </div>
            </div>
        </main>
    );
}

export default Main;