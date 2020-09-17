import React from 'react';
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
                <img src={decoration} alt="decoration" className="main__content__img"/>
                <GiveClothesLink />
            </div>
        </main>
    );
}

export default Main;