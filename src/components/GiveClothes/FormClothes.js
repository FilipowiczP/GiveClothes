import React, { useState } from 'react';

import './scss/formClothes.scss';

const FormClothes = () =>{
    
    const [step, setStep] = useState (1);


    return(
        <section className="formClothes">
                <h1 className="formClothes__step">Krok {step}/4</h1>
            <div className="formClothes__firstStep">
                <h2 className="formClothes__firstStep__title">Zaznacz co chcesz oddać:</h2>

                <form className="formClothes__firstStep__form">

                    <label for="clothes1" className="formClothes__firstStep__form__label">
                        <input type="radio" id="clothes1" name="clothes" className="formClothes__firstStep__form__input"/>
                        ubrania, które nadają się do ponownego urzycia
                        <span className="formClothes__firstStep__form__checkbox"></span>
                    </label>

                    <label for="clothes2" className="formClothes__firstStep__form__label">
                        <input type="radio" id="clothes2" name="clothes" className="formClothes__firstStep__form__input"/>
                        ubrania, do wyrzucenia
                        <span className="formClothes__firstStep__form__checkbox"></span>
                    </label>

                    <label for="clothes3" className="formClothes__firstStep__form__label">
                        <input type="radio" id="clothes3" name="clothes" className="formClothes__firstStep__form__input"/>
                        zabawki
                        <span className="formClothes__firstStep__form__checkbox"></span>
                    </label>

                    <label for="clothes4" className="formClothes__firstStep__form__label">
                        <input type="radio" id="clothes4" name="clothes" className="formClothes__firstStep__form__input"/>
                        książki
                        <span className="formClothes__firstStep__form__checkbox"></span>
                    </label>

                    <label for="clothes5" className="formClothes__firstStep__form__label">
                        <input type="radio" id="clothes5" name="clothes" className="formClothes__firstStep__form__input"/>
                        Inne
                        <span className="formClothes__firstStep__form__checkbox"></span>
                    </label>

                    <button type="submit" className="formClothes__firstStep__form__button">Dalej</button>
                </form>
            </div>
        </section>
    );
};

export default FormClothes;