import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { personAPI } from "../services/api";

const PersonsContext = createContext();

export const usePersons = () => {
  const context = useContext(PersonsContext);
  if (!context) {
    throw new Error(
      "O parâmetro `usePersons` deve ser usado dentro do provedor `PersonsProvider`.",
    );
  }
  return context;
};

export const PersonsProvider = ({ children }) => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPersons = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await personAPI.getAll();
      setPersons(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addPerson = useCallback(async (personData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await personAPI.create(personData);
      setPersons((prev) => [...prev, response.data]);
      return { success: true, data: response.data };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  const updatePerson = useCallback(async (id, personData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await personAPI.update(id, personData);
      setPersons((prev) => prev.map((p) => (p.id === id ? response.data : p)));
      return { success: true, data: response.data };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  const deletePerson = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await personAPI.delete(id);
      setPersons((prev) => prev.filter((p) => p.id !== id));
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPersons();
  }, [fetchPersons]);

  const value = {
    persons,
    loading,
    error,
    fetchPersons,
    addPerson,
    updatePerson,
    deletePerson,
  };

  return (
    <PersonsContext.Provider value={value}>{children}</PersonsContext.Provider>
  );
};
