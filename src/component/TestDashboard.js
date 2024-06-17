import React, {useState, useEffect, useMemo} from 'react';
import axios from "axios";
import '../css/TestDashboard.css';
import TestCard from "./TestCard";
import ModalTestCard from "./ModalTestCard";
import { useTheme } from './ThemeContext';

const baseUrl = 'http://localhost:8080/api/v1/tests';

const TestDashboard = () => {

    const [testList, setTestList] = useState([]);
    const [error, setError] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [activeTestId, setActiveTestId] = useState(null);

    const { theme, toggleTheme } = useTheme();

    const openModalHandler = (testId) => {
        setOpenModal(true);
        setActiveTestId(testId)
    }

    const closeModalHandler = () => {
        setOpenModal(false)
    }

    useEffect(() => {
        axios.get(baseUrl)
            .then((response) => {
                setTestList(response.data.tests);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    const test = useMemo(() => {
        return testList.find(test => test.id === activeTestId);
    }, [activeTestId, testList]);

    return (
        <div className="content">
            <div>
                <span className={`test-list-title ${theme}-theme`}>Онлайн тесты</span>
            </div>

            <div className="test-dashboard">
                {error && <div className="error-message">Ошибка: {error}</div>}
                {testList.map((el, index) =>
                    <TestCard
                        openModal={() => openModalHandler(el.id)}
                        key={el.id}
                        title={el.title}
                        description={el.description}
                        className={index % 2 === 1 ? "test-card-odd" : "test-card-even"}
                    />
                )}
            </div>

            <ModalTestCard
                closeModal={() => closeModalHandler()}
                title={test ? test.title : ''}
                description={test ? test.description : ''}
                instructions={test ? test.instructions : ''}
                openModal={openModal}
            />

        </div>
    )

}

export default TestDashboard;