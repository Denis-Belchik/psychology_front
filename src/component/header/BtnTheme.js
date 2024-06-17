import '../../css/header/BtnTheme.css';
import darkIcon from '../../img/dark.png'
import lightIcon from '../../img/light.png'
import {useTheme} from '../ThemeContext';
import React from 'react';

const BtnTheme = () => {

    const {theme, toggleTheme} = useTheme();

    const icon = theme === 'light' ? darkIcon : lightIcon;

    return (

        <button onClick={toggleTheme} aria-label="Сменить тему" className="toggle-theme-btn">
            <img className="toggle-theme-btn-icon" src={icon} alt="Сменить тему"/>
        </button>

    );

}

export default React.memo(BtnTheme);