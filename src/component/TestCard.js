import '../css/TestCard.css';
import { useTheme } from './ThemeContext';
import React from 'react';

const TestCard = React.memo(({openModal, title, description, className}) => {

    const { theme, toggleTheme } = useTheme();
    const classes = `test-card test-card-btn ${className} ${theme}-theme`;

    return (

        <button onClick={openModal} type="button" className={classes}>
            <span className="test-card-title">{title}</span>
            <span className="test-card-description">{description}</span>
        </button>

    );

});

export default TestCard;