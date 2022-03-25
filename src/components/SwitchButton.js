import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../style/_switchButton.scss';

const SwitchButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className="switch-button pt-1 me-3">
            <input type="checkbox" name="checkbox" checked={!theme} className="switch" onChange={toggleTheme} />
        </div>
    );
};

export default SwitchButton;