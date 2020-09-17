import React from 'react';
import './scss/secondSection.scss';

import decoration from '../images/Decoration.svg';
import icon1 from '../images/Icon-1.svg'
import icon2 from '../images/Icon-2.svg'
import icon3 from '../images/Icon-3.svg'
import icon4 from '../images/Icon-4.svg'

import GiveClothesLink from '../GiveClothes/GiveClothesLinks';

const SecondSection = () => {
    return(
        <section className="secondSection" id="secondSection">
            <h1 className="secondSection__title">Wystarczą 4 proste kroki</h1>
            <img src={decoration} alt="decoration" className="secondSection__img" />
            
            <div className="secondSection__content">
                <div className="secondSection__content__box">
                    <img src={icon1} alt="icon" />
                    <h2 className="secondSection__content__box__title">Wybierz rzeczy</h2>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="secondSection__content__box">
                    <img src={icon2} alt="icon" />
                    <h2 className="secondSection__content__box__title">Spakuj je</h2>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="secondSection__content__box">
                    <img src={icon3} alt="icon" />
                    <h2 className="secondSection__content__box__title">Zdecyduj komu chcesz pomóc</h2>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="secondSection__content__box">
                    <img src={icon4} alt="icon" />
                    <h2 className="secondSection__content__box__title">Zamów kuriera</h2>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>

            <GiveClothesLink />

        </section>
    );
}

export default SecondSection;