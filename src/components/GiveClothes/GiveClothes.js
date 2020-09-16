import React, { useState } from 'react';
import './scss/giveClothes.scss';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

const GiveClothes = () =>{

    const [login, setLogin] = useState (null);

    firebase.auth().onAuthStateChanged(function(user) {
        if(user){
            setLogin(true);
        }else{
            setLogin(false);
        }
    });

    if(login){
        return(
            <Link to='/give-clothes' className="giveClothes">Oddaj rzeczy</Link>
        );
    }else{
        return(
            <Link to='/login' className="giveClothes">Oddaj rzeczy</Link>
        )
    }
};

export default GiveClothes;