import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../style/_switchButton.scss';

const SwitchButton = () => {
    const { toggleTheme } = useContext(ThemeContext)


    return (
        <div className="switch-button">
            <input type="checkbox" name="checkbox" class="switch" />
        </div>
    );
};

export default SwitchButton;