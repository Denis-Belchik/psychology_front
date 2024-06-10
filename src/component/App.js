import '../css/App.css';
import Header from "./Header";
import Content from "./Content";

function App() {
    return (
        <div className="App">
            <Header title="Психологические тесты"/>
            <main>
                <Content title="Тест 1"/>
            </main>
        </div>
    );
}

export default App;
