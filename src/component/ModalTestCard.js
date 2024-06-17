import '../css/ModalTestCard.css';
import {useTheme} from './ThemeContext';

const ModalTestCard = (props) => {

    const {theme, toggleTheme} = useTheme();

    return (

        <div className={`overlay animated ${props.openModal ? 'show' : ''}`}>
            <div className={`modal ${theme}-theme`}>

                <div className="buttons-container">
                    <button onClick={props.closeModal} type="button"
                            className={`modal-test-btn ${theme}-theme`}>Закрыть
                    </button>
                </div>

                <h1 className="h">{props.title}</h1>

                <div className="test-description">
                    <p>{props.description}</p>
                </div>

                <h2 className="test-title h"> Инструкция к тесту </h2>

                <div className="test-description" dangerouslySetInnerHTML={{__html: props.instructions}}/>
                {/*{props.instructions}*/}
                {/*</div>*/}

                <div style={{justifyContent: "center"}} className="buttons-container">
                    <button type="button" className={`modal-test-btn ${theme}-theme`}>Начать тестирование
                    </button>
                </div>

            </div>
        </div>

    );

}

export default ModalTestCard;