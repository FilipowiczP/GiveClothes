import React, { useState } from 'react';
import './scss/whoHelp.scss';
import decoration from '../images/Decoration.svg';

const WhoHelp = () =>{
    const [slider, setSlider] = useState(1);
     
    const handleFirst = () =>{
        setSlider(1);
    }
    const handleSecond = () =>{
        setSlider(2);
    }
    const handleThird = () =>{
        setSlider(3);
    }

     return (
        <section className="whoHelp" id="whoHelp">
            <h1 className="whoHelp__title">Komu pomagamy?</h1>
            <img src={decoration} alt="decoration" />
            <div className="whoHelp__box">
                <h2 onClick={handleFirst} className={slider === 1 ? "whoHelp__box__organization whoHelp__box__organization__active" : "whoHelp__box__organization"}>Fundacjom</h2>
                <h2 onClick={handleSecond} className={slider === 2 ? "whoHelp__box__organization whoHelp__box__organization__active" : "whoHelp__box__organization"}>Organizacją pozarządowym</h2>
                <h2 onClick={handleThird} className={slider === 3 ? "whoHelp__box__organization whoHelp__box__organization__active" : "whoHelp__box__organization"}>Lokalnym zbiórkom</h2>
            </div>
            <div className={slider === 1 ? "whoHelp__content" : "whoHelp__content-hide"}>

            </div>
            <div className={slider === 2 ? "whoHelp__content" : "whoHelp__content-hide"}>

            </div>
            <div className={slider === 3 ? "whoHelp__content" : "whoHelp__content-hide"}>

            </div>
            <div className="whoHelp__page">
                <p onClick={handleFirst} className={slider === 1 ? "whoHelp__page__site whoHelp__page__site__active" : "whoHelp__page__site"}>1</p>
                <p onClick={handleSecond} className={slider === 2 ? "whoHelp__page__site whoHelp__page__site__active" :"whoHelp__page__site"}>2</p>
                <p onClick={handleThird} className={slider === 3 ? "whoHelp__page__site whoHelp__page__site__active" :"whoHelp__page__site"}>3</p>
            </div>
        </section>
    );
}

export default WhoHelp;