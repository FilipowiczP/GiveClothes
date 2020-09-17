import React, { useState } from 'react';

import './scss/formClothes.scss';

const FormClothes = () =>{
    
    const [step, setStep] = useState (1);

    const [formAnswer, setFormAnswer] = useState ({
        firstStep: null,
        select: null,
    })
    
    const ChangeHandler = (e) =>{
        setFormAnswer({
            ...step,
            firstStep: e.currentTarget.value
        })
    }

    const selectHandler = (e) =>{
        setFormAnswer({
            ...step,
            select: e.currentTarget.value
        })
        console.log(formAnswer);
    }

    const nextStep = (event) =>{
        event.preventDefault();
        setStep(prev => prev + 1);        
    }

    const prevStep = (event) =>{
        event.preventDefault();
        setStep(prev => prev - 1);        
    }


    return(
        <section className="formClothes">
                <h1 className="formClothes__step">Krok {step}/4</h1>
            <div className={step === 1 ? "formClothes__firstStep" : "formClothes__firstStep-hide"}>
                <h2 className="formClothes__firstStep__title">Zaznacz co chcesz oddać:</h2>

                <form className="formClothes__firstStep__form">

                    <label for="clothes1" className="formClothes__firstStep__form__label">
                        <input type="radio" id="clothes1" name="clothes" className="formClothes__firstStep__form__input" value="ubrania, które nadają się do ponownego urzycia" onChange={e => ChangeHandler(e)}/>
                        ubrania, które nadają się do ponownego urzycia
                        <span className="formClothes__firstStep__form__checkbox"></span>
                    </label>

                    <label for="clothes2" className="formClothes__firstStep__form__label">
                        <input type="radio" id="clothes2" name="clothes" className="formClothes__firstStep__form__input" value="ubrania, do wyrzucenia" onChange={e => ChangeHandler(e)}/>
                        ubrania, do wyrzucenia
                        <span className="formClothes__firstStep__form__checkbox"></span>
                    </label>

                    <label for="clothes3" className="formClothes__firstStep__form__label">
                        <input type="radio" id="clothes3" name="clothes" className="formClothes__firstStep__form__input" value="zabawki" onChange={e => ChangeHandler(e)}/>
                        zabawki
                        <span className="formClothes__firstStep__form__checkbox"></span>
                    </label>

                    <label for="clothes4" className="formClothes__firstStep__form__label">
                        <input type="radio" id="clothes4" name="clothes" className="formClothes__firstStep__form__input" value="książki" onChange={e => ChangeHandler(e)}/>
                        książki
                        <span className="formClothes__firstStep__form__checkbox"></span>
                    </label>

                    <label for="clothes5" className="formClothes__firstStep__form__label">
                        <input type="radio" id="clothes5" name="clothes" className="formClothes__firstStep__form__input" value="Inne" onChange={e => ChangeHandler(e)}/>
                        Inne
                        <span className="formClothes__firstStep__form__checkbox"></span>
                    </label>

                    <button type="submit" className="formClothes__firstStep__form__button" onClick={event => nextStep(event)}>Dalej</button>
                </form>
            </div>


            <div className={step === 2 ? "formClothes__secondStep" : "formClothes__secondStep-hide"}>
                <h1 className="formClothes__secondStep__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
             
                <form className="formClothes__secondStep__form">
                  
                    <label for="bag">Liczba 60l worków</label>
                    <select name="bag" id="bag" className="formClothes__secondStep__form__select" onChange={e => selectHandler(e)}>
                        <option disabled selected hidden>-Wybierz-</option>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" >5</option>
                    </select>
              
                </form>
              
                <button onClick={event => prevStep(event)} className="formClothes__secondStep__button">Wstecz</button>
                <button onClick={event => nextStep(event)} className="formClothes__secondStep__button">Dalej</button>
          
            </div>
        </section>
    );
};

export default FormClothes;