import React,{ useState } from 'react';
import './scss/form.scss';

const Form = () =>{

    const [send, setSend] = useState (false);

    const handleClick = () =>{
        setSend(true);
    }

    return(
        <form className="form">
            <div className="form__box">
                <div className="form__box__layout">
                    <label for="name" className="form__box__layout__label">Wpisz swoję imię</label>
                    <input type="text" id="name" placeholder="Krzysztof" className="form__box__layout__input" />
                </div>
                <div className="form__box__layout">
                    <label for="email" className="form__box__layout__label">Wpisz swój email</label>
                    <input type="email" id="email" placeholder="abc@xyz.pl" className="form__box__layout__input" />
                </div>
            </div>
            <div className="form__area">
                <label for="textArea">Wpisz swoją wiadomość </label>
                <textarea className="form__area__textarea" id="textArea" placeholder="Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat."></textarea>
            </div>
            <p className={send ? "form__send" : "form__send-hide"}>Wiadomość wysłana</p>
            <button type="submit" onClick={handleClick} className="form__submit">Wyślij</button>
        </form>
    );
}

export default Form;