import React, {useState, useEffect} from 'react';
import axios from "axios";
import '../css/TestDashboard.css';
import TestCard from "./TestCard";
import ModalTestCard from "./ModalTestCard";

const baseUrl = 'http://localhost:8080/api/v1/tests';

const TestDashboard = () => {

    const [testList, setTestList] = useState([]);
    const [error, setError] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [activeTestId, setActiveTestId] = useState(null);

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

    return (
        <div className="content">
            <div>
                <span className="test-list-title">Онлайн тесты</span>
            </div>

            <div className="test-dashboard">
                {error && <div className="error-message">Ошибка: {this.state.error}</div>}
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
                description={testList.find(test => test.id === activeTestId) ?
                    testList.find(test => test.id === activeTestId).description :
                    ''
                }
                openModal={openModal}
            />

        </div>
    )

}

export default TestDashboard;