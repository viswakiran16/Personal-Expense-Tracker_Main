import axios from "axios";
import { Navigate } from "react-router-dom";

const API_URL = "https://expense-tracker-backend-ohnc.onrender.com/api/auth";

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    Navigate("/");
  }
  return response.data;
};

const logout = async () => {
  await axios.post(`${API_URL}/logout`);
  console.log(localStorage.getItem("token"));
  localStorage.removeItem("token");
  Navigate("/login");
};

export default {
  register,
  login,
  logout,
};
