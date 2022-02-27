import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const DarkMode = () => {


    const { toggleTheme, theme } = useContext(ThemeContext)


    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={toggleTheme} />
        </div>
        // <button className='btn btn-outline-primary' onClick={toggleTheme}>{theme ? "Dark" : "Light"}</button>
    );
};

export default DarkMode;