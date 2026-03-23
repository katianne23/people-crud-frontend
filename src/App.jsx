import { Logo } from "./components/icons/Logo";
import { More } from "./components/icons/More";
import "./App.css";
import "./Index.css";

function App() {
  return (

      <div className="app">
        <header className="app-header">
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <Logo />
                <h1>People CRUD</h1>
              </div>
              <button className="btn-primary btn-add">
                <More />
                Adicionar Pessoa
              </button>
            </div>
          </div>
        </header>
      </div>
  );
}

export default App;
