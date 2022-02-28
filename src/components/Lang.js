import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';

const Lang = () => {

    const { toggleLang, lang } = useContext(LangContext)

    return (
        <div className="flag-lang" onClick={toggleLang}>
            {lang ? <img src="https://img.icons8.com/color/40/000000/france-circular.png" alt='français' /> : <img src="https://img.icons8.com/color/40/000000/great-britain-circular.png" alt='english' />}
        </div>
    );
};

export default Lang;