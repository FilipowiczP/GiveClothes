import React, { useState } from 'react';

import decoration from '../images/Decoration.svg';

import './scss/formClothes.scss';

const FormClothes = () =>{
    
    const [step, setStep] = useState (1);

    const [firstStep, setFirstStep] = useState ('');
    const [select, setSelect] = useState ('');
    const [location, setLocation] = useState ('');
    const [whoHelps, setWhoHelps] = useState ('');
    const [organizations, setOrganizations] = useState ('');
    const [streets, setStreets] = useState ('');
    const [town, setTown] = useState ('');
    const [zips, setZips] = useState ('');
    const [nr, setNr] = useState ('');
    const [day, setDay] = useState ('');
    const [time, setTime] = useState ('');
    const [comments, setComments] = useState ('');

    const [formAnswer, setFormAnswer] = useState ({
        firstStep: '',
        select: '',
        location:'',
        whoHelp:'',
        organization:'',
        street:'',
        city:'',
        zip:'',
        phone:'',
        data:'',
        hour:'',
        comment:''
    })
    
    const ChangeHandler = (e) =>{
        e.preventDefault();
        setFirstStep(e.currentTarget.value)
    }

    const selectHandler = (e) =>{
        e.preventDefault();
        setSelect(e.currentTarget.value)
    }
    
    const locationHandler = (e)=>{
        e.preventDefault();
        setLocation(e.currentTarget.value)
    }

    const whoHelp = (e)=>{
        e.preventDefault();
        setWhoHelps(e.currentTarget.value)
    }

    const organization =(e) =>{
        e.preventDefault();
        setOrganizations( e.currentTarget.value)
    }
    
    const street =(e) =>{
        e.preventDefault();
        setStreets(e.currentTarget.value)
    }
    
    const city =(e) =>{
        e.preventDefault();
        setTown(e.currentTarget.value)
    }
    
    const zip =(e) =>{
        e.preventDefault();
        setZips(e.currentTarget.value)
    }
    
    const phone =(e) =>{
        e.preventDefault();
        setNr(e.currentTarget.value)
    }

    const data =(e) =>{
        e.preventDefault();
        setDay(e.currentTarget.value)
    }
    
    const hour =(e) =>{
        e.preventDefault();
        setTime(e.currentTarget.value)
    }

    const comment =(e) =>{
        e.preventDefault();
        setComments(e.currentTarget.value)
    }

    const nextStep = (event) =>{
            setFormAnswer({
                firstStep:firstStep,
                select:select,
                location:location,
                whoHelp:whoHelps,
                organization:organizations,
                street:streets,
                city:town,
                zip:zips,
                phone:nr,
                data:day,
                hour:time,
                comment:comments
            })
        event.preventDefault();
        setStep(prev => prev + 1);        
    }

    const prevStep = (event) =>{
        event.preventDefault();
        setStep(prev => prev - 1);        
    }

    const sendAgain = (event) =>{
        event.preventDefault();
        setStep(1);        
    }




    return(
        <section className="formClothes">
            <div className={step === 1 ? "formClothes__firstStep" : "formClothes__firstStep-hide"}>
                <h1 className="formClothes__step">Krok {step}/5</h1>
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

                    <button type="submit" className="formClothes__button" onClick={event => nextStep(event)}>Dalej</button>
                </form>
            </div>


            <div className={step === 2 ? "formClothes__secondStep" : "formClothes__secondStep-hide"}>
                <h1 className="formClothes__step">Krok {step}/5</h1>
                <h1 className="formClothes__secondStep__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
             
                <form className="formClothes__secondStep__form">
                  
                    <label for="bag" className="formClothes__secondStep__label">
                        Liczba 60l worków
                        <select name="bag" id="bag" className="formClothes__secondStep__form__select" onChange={e => selectHandler(e)}>
                            <option disabled selected hidden>-Wybierz-</option>
                            <option value="1" >1</option>
                            <option value="2" >2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                        </select>
                    </label>
                </form>
              
                <button onClick={event => prevStep(event)} className="formClothes__button">Wstecz</button>
                <button onClick={event => nextStep(event)} className="formClothes__button">Dalej</button>
          
            </div>

            <div className={step === 3 ? "formClothes__thirdStep" : "formClothes__thirdStep-hide"}>
                <h1 className="formClothes__step">Krok {step}/5</h1>
                <h1 className="formClothes__thirdStep__title">Lokalizacja:</h1>

                <form className="formClothes__thirdStep__form">

                    <label>
                        <select className="formClothes__thirdStep__form__select" onChange={e => locationHandler(e)}>
                            <option disabled selected hidden>-Wybierz-</option>
                            <option value="Poznań">Poznań</option>
                            <option value="Warszawa">Warszawa</option>
                            <option value="Kraków">Kraków</option>
                            <option value="Wrocław">Wrocław</option>
                            <option value="Katowice">Katowice</option>
                        </select>
                    </label>

                    <div className="formClothes__thirdStep__form__box">
                        <label for="forWho" className="formClothes__thirdStep__form__radio">
                            <input type="radio" id="forWho" name="forWho" className="formClothes__thirdStep__form__input" onChange={e => whoHelp(e)}/>
                            dzieciom
                            <span className="formClothes__thirdStep__form__checkbox"></span>
                        </label>

                        <label for="forWho1" className="formClothes__thirdStep__form__radio">
                            <input type="radio" id="forWho1" name="forWho" className="formClothes__thirdStep__form__input" onChange={e => whoHelp(e)}/>
                            samotnym matkom
                            <span className="formClothes__thirdStep__form__checkbox"></span>
                        </label>

                        <label for="forWho2" className="formClothes__thirdStep__form__radio">
                            <input type="radio" id="forWho2" name="forWho" className="formClothes__thirdStep__form__input" onChange={e => whoHelp(e)}/>
                            bezdomnym
                            <span className="formClothes__thirdStep__form__checkbox"></span>
                        </label>

                        <label for="forWho3" className="formClothes__thirdStep__form__radio">
                            <input type="radio" id="forWho3" name="forWho" className="formClothes__thirdStep__form__input" onChange={e => whoHelp(e)}/>
                            niepełnosprawnym
                            <span className="formClothes__thirdStep__form__checkbox"></span>
                        </label>

                        <label for="forWho4" className="formClothes__thirdStep__form__radio">
                            <input type="radio" id="forWho4" name="forWho" className="formClothes__thirdStep__form__input" onChange={e => whoHelp(e)}/>
                            osobą starszym
                            <span className="formClothes__thirdStep__form__checkbox"></span>
                        </label>
                    </div>

                    <label for="organization">Wpisz nazwę konkretnej organizacji(opcjonalne)</label>
                    <input type="text" id="organization" className="formClothes__thirdStep__form__organization" onChange={e => organization(e)}/>

                </form>

                <button onClick={event => prevStep(event)} className="formClothes__button">Wstecz</button>
                <button onClick={event => nextStep(event)} className="formClothes__button">Dalej</button>
            </div>

            <div className={step === 4 ? "formClothes__fourthStep" : "formClothes__fourthStep-hide"}>
                <h1 className="formClothes__step">Krok {step}/5</h1>
                <h1 className="formClothes__fourthStep__title">Podaj adres oraz termin odbioru rzecz przez kuriera</h1>

                <form className="formClothes__fourthStep__form">
                    <div className="formClothes__fourthStep__form__box">
                        <h2>Adres odbioru:</h2>
                        <label className="formClothes__fourthStep__form__label">
                            Ulica
                            <input type="text" className="formClothes__fourthStep__form__input" onChange={e => street(e)}/>
                        </label>
                        <label className="formClothes__fourthStep__form__label">
                            Miasto
                            <input type="text" className="formClothes__fourthStep__form__input" onChange={e => city(e)}/>
                        </label>
                        <label className="formClothes__fourthStep__form__label">
                            Kod pocztowy
                            <input type="text" className="formClothes__fourthStep__form__input" onChange={e => zip(e)}/>
                        </label>
                        <label className="formClothes__fourthStep__form__label">
                            Numer telefonu
                            <input type="text" className="formClothes__fourthStep__form__input" onChange={e => phone(e)}/>
                        </label>
                    </div>

                    <div className="formClothes__fourthStep__form__box">
                        <h2>Termin odbioru:</h2>
                        <label className="formClothes__fourthStep__form__label">
                            Data
                            <input type="text" className="formClothes__fourthStep__form__input" onChange={e => data(e)}/>
                        </label>
                        <label className="formClothes__fourthStep__form__label">
                            Godzina
                            <input type="text" className="formClothes__fourthStep__form__input" onChange={e => hour(e)}/>
                        </label>
                        <label className="formClothes__fourthStep__form__label">
                            Uwagi dla kuriera
                            <input type="text" className="formClothes__fourthStep__form__input" onChange={e => comment(e)}/>
                        </label>
                    </div>

                </form>

                <button onClick={event => prevStep(event)} className="formClothes__button">Wstecz</button>
                <button onClick={event => nextStep(event)} className="formClothes__button">Dalej</button>
            </div>

            <div className={step === 5 ? "formClothes__fifthStep" : "formClothes__fifthStep-hide"}>
                <h1 className="formClothes__step">Krok {step}/5</h1>
                <h1>Podsumowanie Twojej darowizny</h1>
                <h2>Oddajesz:</h2>
                <p>{formAnswer.select} {formAnswer.firstStep},{formAnswer.whoHelp}</p>
                <p>dla lokalizacji: {formAnswer.location}</p>
                <div className="formClothes__fifthStep__content">
                    <div className="formClothes__fifthStep__content__box">
                        <h2>Adres odbioru</h2>
                        <p className="formClothes__fifthStep__content__box__text">Ulica: {formAnswer.street}</p>
                        <p className="formClothes__fifthStep__content__box__text">Miasto: {formAnswer.city}</p>
                        <p className="formClothes__fifthStep__content__box__text">Kod pocztowy: {formAnswer.zip}</p>
                        <p className="formClothes__fifthStep__content__box__text">Numer telefonu: {formAnswer.phone}</p>
                    </div>
                
                    <div className="formClothes__fifthStep__content__box">
                        <h2>Termin odbioru</h2>
                        <p className="formClothes__fifthStep__content__box__text">Data: {formAnswer.data}</p>
                        <p className="formClothes__fifthStep__content__box__text">Godzina: {formAnswer.hour}</p>
                        <p className="formClothes__fifthStep__content__box__text">Uwagi dla kuriera: {formAnswer.comment}</p>
                    </div>
                </div>

                <button onClick={event => prevStep(event)} className="formClothes__button">Wstecz</button>
                <button onClick={event => nextStep(event)} className="formClothes__button">Potwierdzam</button>
            </div>
            
            <div className={step === 6 ? "formClothes__lastStep" : "formClothes__lastStep-hide"}>
                <h1 className="formClothes__lastStep__title">
                    Dziękujemy za przesłanie formularza
                    Na maila prześlemy wszelkie informacje o odbiorze.
                </h1>
                <img src={decoration} alt="decoration" className="formClothes__lastStep__img" />

                <button onClick={event => sendAgain(event)} className="formClothes__button">Wyślij ponownie</button>
                
            </div>

        </section>
    );
};

export default FormClothes;