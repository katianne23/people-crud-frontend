import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const message = error.response.data?.error || "Erro na requisição";
      return Promise.reject(new Error(message));
    }
    if (error.request) {
      return Promise.reject(new Error("Erro de conexão com o servidor"));
    }
    return Promise.reject(error);
  },
);

export const personAPI = {
  getAll: () => api.get("/pessoa"),

  getById: (id) => api.get(`/pessoa/${id}`),

  create: (data) => api.post("/pessoa", data),

  update: (id, data) => api.put(`/pessoa/${id}`, data),

  delete: (id) => api.delete(`/pessoa/${id}`),
};

export default api;
