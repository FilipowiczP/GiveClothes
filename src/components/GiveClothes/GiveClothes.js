import React from 'react';
import './scss/giveClothes.scss';

import decoration from '../images/Decoration.svg';

import Navigation from '../Home/Navigation';
import Info from './Info';
import FormClothes from './FormClothes';
import Message from '../Home/Footer'


const GiveClothes = () =>{
    return(
        <>
            <main className="giveClothes">
                <Navigation />
                <div className="giveClothes__content">
                    <h1 className="giveClothes__content__title">Oddaj rzeczy, których już nie chcesz</h1>
                    <h2 className="giveClothes__content__title">Potrzebującym</h2>
                    <img src={decoration} alt="decoration" className="giveClothes__content__decoration" />
                    <h3 className="giveClothes__content__title">Wystarczą 4 proste kroki</h3>
                    
                    <div className="giveClothes__content__steps">
                        <div className="giveClothes__content__steps__box">
                            <h4>1</h4>
                            <p>Wybierz rzeczy</p>
                        </div>

                        <div className="giveClothes__content__steps__box">
                            <h4>2</h4>
                            <p>Spakuj je w worki</p>
                        </div>

                        <div className="giveClothes__content__steps__box">
                            <h4>3</h4>
                            <p>Wybierz fundację</p>
                        </div>

                        <div className="giveClothes__content__steps__box">
                            <h4>4</h4>
                            <p>Zamów kuriera</p>
                        </div>
                    </div>
                </div>
            </main>
            <Info />
            <FormClothes />
            <Message />
        </>
    );
};

export default GiveClothes;