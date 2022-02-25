import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';

const Lang = () => {

    const { toggleLang, lang } = useContext(LangContext)

    return (
        <button
            onClick={toggleLang}
        >
            {lang ? "FR" : "EN"}
        </button>
    );
};

export default Lang;