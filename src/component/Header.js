import '../css/Header.css';
import darkIcon from '../img/dark.png'
import lightIcon from '../img/light1.png'
import { useTheme } from './ThemeContext';
import React from 'react';

const Header = ({ title = 'Психологические тесты' }) => {

    const { theme, toggleTheme } = useTheme();

    // Выбор иконки в зависимости от текущей темы
    const icon = theme === 'light' ? darkIcon : lightIcon;

    return (
        <header className={`header ${theme}-theme`}>
            <h1>{title}</h1>
            <button onClick={toggleTheme} aria-label="Сменить тему" className="toggle-theme-btn">
                <img className="toggle-theme-btn-icon" src={icon} alt="Сменить тему"/>
            </button>
        </header>
    );

}

export default React.memo(Header);