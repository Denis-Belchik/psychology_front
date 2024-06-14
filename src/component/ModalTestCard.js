import '../css/ModalTestCard.css';

const ModalTestCard = (props) => {

    return (

        <div className={`overlay animated ${props.openModal ? 'show' : ''}`}>
            <div className="modal">

                <div className="buttons-container">
                    <button onClick={props.closeModal} type="button" className="modal-test-btn">Закрыть</button>
                    <button type="button" className="modal-test-btn">Начать тестирование</button>
                </div>

                <h1 className="h">{props.title}</h1>

                <div className="test-description">
                    <p>{props.description}</p>
                </div>

                <h2 className="test-title h"> Инструкция к тесту </h2>

                <div className="test-description" dangerouslySetInnerHTML={{__html: props.instructions}}/>
                {/*{props.instructions}*/}
                {/*</div>*/}

            </div>
        </div>

    );

}

export default ModalTestCard;