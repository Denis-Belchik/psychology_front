import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from './component/ThemeContext';

// Создается корневой элемент (root) с ReactDOM.createRoot, который является контейнером для приложения
// и привязывается к элементу с id='root' в HTML-документе.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Рендер в строгом режиме (StrictMode), который помогает обнаруживать потенциальные проблемы в приложении.
    <React.StrictMode>
        {/* Для предоставления функциональности смены тем. */}
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);


// Утилита для отслеживания производительности
reportWebVitals();
