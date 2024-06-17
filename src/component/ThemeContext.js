// createContext: используется для создания контекста, который можно будет использовать в различных компонентах приложения для доступа к значению темы и функции для её изменения.
// useState: хук для создания состояния в функциональном компоненте.
// useContext: хук для доступа к значению контекста.
// useEffect: хук для выполнения побочных эффектов (side effects) в компоненте, таких как операции с localStorage и DOM.
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from "axios";

// Создание контекста темы
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);  // это кастомный хук, который облегчает доступ к контексту темы в компонентах приложения.

export const ThemeProvider = ({ children }) => {

    const baseUrl = 'http://localhost:8080/api/v1/usertheme';

    // Определяется состояние theme со значением по умолчанию 'light'
    const [theme, setTheme] = useState('light');

    // Переключение темы, изменяет значение theme на противоположное.
    const toggleTheme = async () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        try {
            const response = await axios.post(baseUrl, { theme: newTheme });
            // Обработка ответа от сервера, если необходимо
            console.log('Тема обновлена на сервере:', response.data);
        } catch (error) {
            // Обработка ошибок при отправке запроса
            console.error('Ошибка при обновлении темы на сервере:', error);
            // Здесь можно реализовать логику отката к предыдущей теме, если запрос не удался
        }

        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const fetchTheme = async () => {
            try {
                // Запрос к бэкенду для получения текущей темы
                const response = await axios.get(baseUrl);
                const fetchedTheme = response.data.theme;
                setTheme(fetchedTheme);
            } catch (error) {
                console.error("Ошибка при получении темы с сервера:", error);
                // Здесь можно оставить значение по умолчанию или установить его из localStorage, если это необходимо
            }
        };

        fetchTheme();
    }, []);

    useEffect(() => {
        document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme'; // Устанавливаем класс для body в зависимости от темы
    }, [theme]);


    // Компонент ThemeContext.Provider оборачивает children и предоставляет контекст с текущей темой и функцией
    // toggleTheme, позволяя потомкам использовать эти значения для управления темой оформления.
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
