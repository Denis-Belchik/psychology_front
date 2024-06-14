import '../css/Header.css';
import { useTheme } from './ThemeContext';

const Header = (props) => {

    const { theme, toggleTheme } = useTheme();

    return (
        <header className={`header ${theme}-theme`}>
            <h1>{props.title}</h1>
            <button onClick={toggleTheme}>Сменить тему</button>
        </header>
    );

}

export default Header;