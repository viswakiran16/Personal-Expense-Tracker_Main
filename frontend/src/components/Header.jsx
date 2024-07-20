import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 text-white">
      <nav className="container mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-4">
          <Link to="/" className="text-1xl uppercase font-bold">Dashboard</Link>
        </div>
        <div className="text-2xl font-bold uppercase tracking-wider hover:text-gray-200">
          Personal Expense Tracker
        </div>
        <div>
          {user ? (
            <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-4">Login</Link>
              <Link to="/register" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
