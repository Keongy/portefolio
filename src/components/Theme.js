import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const DarkMode = () => {


    const { toggleTheme, theme } = useContext(ThemeContext)


    return (
        <button
            onClick={toggleTheme}
            className={theme ? "light" : "dark"}
        >
            {theme ? "Dark" : "Light"}
        </button>
    );
};

export default DarkMode;