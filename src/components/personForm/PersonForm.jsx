import { useEffect, useState } from "react";
import { usePersons } from "../../hooks/usePerson";
import { Modal } from "../modal/Modal";
import "./PersonForm.css";

export function PersonForm({ isOpen, onClose, onSuccess, editingPerson }) {
  const { addPerson, updatePerson, loading } = usePersons();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    data_nascimento: "",
    telefone: "",
    endereco: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingPerson) {
      setFormData({
        nome: editingPerson.nome || "",
        email: editingPerson.email || "",
        data_nascimento: editingPerson.data_nascimento?.split("T")[0] || "",
        telefone: editingPerson.telefone || "",
        endereco: editingPerson.endereco || "",
      });
    } else {
      resetForm();
    }
  }, [editingPerson, isOpen]);

  const resetForm = () => {
    setFormData({
      nome: "",
      email: "",
      data_nascimento: "",
      telefone: "",
      endereco: "",
    });
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    } else if (formData.length < 3) {
      newErrors.nome = "Nome deve ter no mínimo 3 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.data_nascimento) {
      newErrors.data_nascimento = "Data de nascimento é obrigatória";
    } else {
      const birthDate = new Date(formData.data_nascimento);
      const today = new Date();
      if (birthDate > today) {
        newErrors.data_nascimento = "Data de nascimento não pode ser futura";
      }
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
    } else if (formData.telefone.replace(/\D/g, "").length < 10) {
      newErrors.telefone = "Telefone deve ter no mínimo 10 dígitos";
    }

    if (!formData.endereco.trim()) {
      newErrors.endereco = "Endereço é obrigatório";
    } else if (formData.endereco.length < 5) {
      newErrors.endereco = "Endereço deve ter no mínimo 5 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const result = editingPerson
      ? await updatePerson(editingPerson.id, formData)
      : await addPerson(formData);

    if (result.success) {
      resetForm();
      onSuccess();
      onClose();
    } else {
      const apiErrors = {};

      if (result.errors) {
        result.errors.forEach((err) => {
          if (err.toLowerCase().includes("endereço")) {
            apiErrors.endereco = err;
          } else if (err.toLowerCase().includes("email")) {
            apiErrors.email = err;
          } else if (err.toLowerCase().includes("nome")) {
            apiErrors.nome = err;
          } else {
            apiErrors.api = err;
          }
        });
      }

      setErrors(apiErrors);
    }
  };

  const formatPhone = (value) => {
    value = value.replace(/\D/g, "");

    if (value.length <= 10) {
      return value
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      return value
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "telefone") {
      newValue = formatPhone(value);
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={editingPerson ? "Editar Pessoa" : "Adicionar Pessoa"}
    >
      <form onSubmit={handleSubmit} className="person-form">
        <div className="form-group">
          <label htmlFor="nome">Nome *</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite o nome completo"
            className={errors.nome ? "error" : ""}
          />
          {errors.nome && (
            <span className="error-message-form">{errors.nome}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="exemplo@email.com"
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="error-message-form">{errors.email}</span>
          )}
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="data_nascimento">Data de Nascimento *</label>
            <input
              type="date"
              id="data_nascimento"
              name="data_nascimento"
              value={formData.data_nascimento}
              onChange={handleChange}
              className={errors.data_nascimento ? "error" : ""}
            />
            {errors.data_nascimento && (
              <span className="error-message-form">
                {errors.data_nascimento}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone *</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
              className={errors.telefone ? "error" : ""}
              maxLength={15}
            />
            {errors.telefone && (
              <span className="error-message-form">{errors.telefone}</span>
            )}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="endereco">Endereco *</label>
          <input
            type="endereco"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            placeholder="Rua, número, bairro, cidade - UF"
            className={errors.endereco ? "error" : ""}
          />
          {errors.endereco && (
            <span className="error-message-form">{errors.endereco}</span>
          )}
        </div>
        <div className="form-actions">
          <button type="button" onClick={handleClose} className="btn-secondary">
            Cancelar
          </button>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading
              ? "Salvando..."
              : editingPerson
                ? "Atualizar"
                : "Cadastrar"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
