import { usePersons } from "../../hooks/usePerson";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import "./PersonList.css";
import { PersonCard } from "../personCard/PersonCard";

export function PersonList({ onEdit }) {
  const { persons, loading, error } = usePersons();

  if (loading && persons.length === 0) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Carregando pessoas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">
          <MdOutlineErrorOutline />
        </div>
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="btn-primary"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  if (persons.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          <FaUsers />
        </div>
        <h3>Nenhuma pessoa cadastrada</h3>
        <p>Clique no botão "Adicionar Pessoa" para começar</p>
      </div>
    );
  }
  return (
    <div className="person-list">
      <div className="list-header">
        <h2>Pessoas Cadastradas</h2>
        <span className="person-count">{persons.length} pessoa(s)</span>
      </div>

      <div className="cards-grid">
        {persons.map((person, index) => (
          <PersonCard
            key={person.id}
            person={person}
            onEdit={onEdit}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
