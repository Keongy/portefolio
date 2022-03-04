import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const DarkModeSwitch = () => {
    const { toggleTheme } = useContext(ThemeContext)

    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={toggleTheme} />
        </div>
    );
};

export default DarkModeSwitch;