import '../css/TestCard.css';

const TestCard = (props) => {

    const classes = `test-card test-card-btn ${props.className}`;

    return (

        <button onClick={props.openModal} type="button" className={classes}>
            <span className="test-card-title">{props.title}</span>
            <span className="test-card-description">{props.description}</span>
        </button>

    );

}

export default TestCard;