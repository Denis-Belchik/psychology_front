import '../css/TestCard.css';
import { useTheme } from './ThemeContext';

const TestCard = (props) => {

    const { theme, toggleTheme } = useTheme();
    const classes = `test-card test-card-btn ${props.className} ${theme}-theme`;

    return (

        <button onClick={props.openModal} type="button" className={classes}>
            <span className="test-card-title">{props.title}</span>
            <span className="test-card-description">{props.description}</span>
        </button>

    );

}

export default TestCard;