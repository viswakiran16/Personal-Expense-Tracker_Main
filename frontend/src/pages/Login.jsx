import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import authService from "../services/authService";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login({ email, password });
      Navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded-lg"
      >
        <h2 className="text-2xl mb-6 text-center font-bold text-blue-600">
          Login
        </h2>
        <div className="mb-6 relative">
          <label className="block text-gray-700 mb-2">Email</label>
          <div className="relative flex items-center">
            <FaUser className="absolute left-3 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="mb-6 relative">
          <label className="block text-gray-700 mb-2">Password</label>
          <div className="relative flex items-center">
            <FaLock className="absolute left-3 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
