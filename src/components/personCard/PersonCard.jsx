import { useState } from "react";
import { usePersons } from "../../hooks/usePerson";
import { MdOutlineEmail, MdDeleteForever } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa";
import { TbMapSearch } from "react-icons/tb";
import { EditIcon } from "../icons/Edit";
import "./PersonCard.css";

export function PersonCard({ person, onEdit, index}) {
  const { deletePerson, loading } = usePersons();
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  const handleDelete = async () => {
    setDeleting(true);
    const result = await deletePerson(person.id);
    setDeleting(false);
    if (result.success) {
      setShowConfirm(false);
    }
  };

  return (
    <div
      className="person-card face-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-header">
        <div className="avatar">{person.nome.charAt(0).toUpperCase()}</div>
        <div className="card-actions">
          <button
            className="btn-edit"
            onClick={() => onEdit(person)}
            disabled={loading}
            title="Editar"
          >
            <EditIcon />
          </button>
          <button
            className="btn-delete"
            onClick={() => setShowConfirm(true)}
            disabled={loading}
            title="Excluir"
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>

      <div className="card-content">
        <h3 className="person-name">{person.nome}</h3>
        <div className="person-details">
          <div className="detail-item">
            <MdOutlineEmail />
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </div>
          <div className="detail-item">
            <CiCalendarDate />
            <span>{formatDate(person.data_nascimento)}</span>
          </div>
          <div className="detail-item">
            <FaPhoneVolume />
            <a href={`tel:${person.telefone}`}>{person.telefone}</a>
          </div>
          <div className="detail-item address">
            <TbMapSearch />
            <span>{person.endereco}</span>
          </div>
        </div>
      </div>

      {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-dialog slide-in">
            <p>Tem certeza que deseja excluir {person.nome} ?</p>
            <div className="confirm-actions">
              <button
                onClick={() => setShowConfirm(false)}
                className="btn-secondary"
                disabled={deleting}
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="btn-danger"
                disabled={deleting}
              >
                {deleting ? "Excluindo..." : "Excluir"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
