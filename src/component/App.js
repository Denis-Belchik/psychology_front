import '../css/App.css';
import Header from "./Header";
import TestDashboard from "./TestDashboard";

const App = () => {
    return (

        <div className="App">
            <Header title="Психологические тесты"/>
            <main>
                <TestDashboard/>
            </main>
        </div>

    );
}

export default App;
