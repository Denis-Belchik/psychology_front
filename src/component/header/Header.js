import '../../css/header/Header.css';
import {useTheme} from '../ThemeContext';
import React from 'react';
import BtnTheme from "./BtnTheme";

const Header = ({title = 'Психологические тесты'}) => {

    const {theme, toggleTheme} = useTheme();

    return (
        <header className={`header ${theme}-theme`}>
            <h1>{title}</h1>
            <BtnTheme/>
        </header>
    );

}

export default React.memo(Header);