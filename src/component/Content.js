import React from 'react';
import '../css/Content.css';
import TestUnitInList from "./TestUnitInList";
import axios from "axios";

const baseUrl = 'http://localhost:8080/api/v1/tests';

class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            testList: []
        }
        axios.get(baseUrl).then((response) => {
            this.setState({testList: response.data.tests});

        });

    }


    render() {
        return (
            <div className="content">
                <div>
                    <span className="test-name-list">Тесты онлайн</span>
                </div>
                <div className="container">
                    {this.state.testList.map((el, index) =>
                        <TestUnitInList key={el.id} title={el.title} description={el.description}
                        className={index % 2 === 1 ? "test-unit-odd" : "test-unit-even"}
                        />)}
                </div>
            </div>
        )
    }
}

export default Content;