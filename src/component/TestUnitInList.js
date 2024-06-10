import '../css/TestUnitInList.css';
import React from "react";

class TestUnitInList extends React.Component  {
    render() {

        const classes = `test-unit-list ${this.props.className}`;

        return (

            <button type="button" className={classes}>
                <span className="test-unit-title">{this.props.title}</span>
                <span className="test-unit-description">{this.props.description}</span>
            </button>

        );
    }
}

export default TestUnitInList;