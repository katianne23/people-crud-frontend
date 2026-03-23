import { Logo } from "./components/icons/Logo";
import { More } from "./components/icons/More";
import "./App.css";
import "./Index.css";
import { PersonList } from "./components/person/PersonList";
import { PersonsProvider } from "./hooks/usePerson";

function App() {
  return (
    <PersonsProvider >
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

        <main className="app-main">
          <div className="container">
            <PersonList />
          </div>
        </main>
      </div>
      </PersonsProvider>
  );
}

export default App;
