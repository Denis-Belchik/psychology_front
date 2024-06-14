import '../css/TestUnitInList.css';

const ModalTestCard = (props) => {

    return (

        <div className={`overlay animated ${props.openModal ? 'show' : ''}`}>
            <div className="modal">
                <button onClick={props.closeModal} type="button" className="test-card">Закрыть !</button>
                <span>{
                    props.description
                }</span>
            </div>
        </div>

    );

}

export default ModalTestCard;