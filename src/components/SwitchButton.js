import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../style/_switchButton.scss';

const SwitchButton = () => {
    const { toggleTheme } = useContext(ThemeContext)


    return (
        <div className="switch-button pt-1 me-3">
            <input type="checkbox" name="checkbox" className="switch" onClick={toggleTheme} />
        </div>
    );
};

export default SwitchButton;