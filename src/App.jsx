import { Logo } from "./components/icons/Logo";
import { More } from "./components/icons/More";
import "./App.css";
import { PersonList } from "./components/person/PersonList";
import { PersonsProvider } from "./hooks/usePerson";
import { PersonForm } from "./components/personForm/PersonForm";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [editingPerson, setEditingPerson] = useState(null);

  const handleEdit = (person) => {
    setEditingPerson(person);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingPerson(null);
  };

  const handleSuccess = () => {
    handleCloseForm();
  };

  return (
    <PersonsProvider>
      <div className="app">
        <header className="app-header">
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <Logo />
                <h1>People CRUD</h1>
              </div>
              <button
                className="btn-primary btn-add"
                onClick={() => setShowForm(true)}
              >
                <More />
                Adicionar Pessoa
              </button>
            </div>
          </div>
        </header>

        <main className="app-main">
          <div className="container">
            <PersonForm
              isOpen={showForm}
              onClose={handleCloseForm}
              onSuccess={handleSuccess}
              editingPerson={editingPerson}
            />
            <PersonList onEdit={handleEdit} />
          </div>
        </main>
      </div>
    </PersonsProvider>
  );
}

export default App;
