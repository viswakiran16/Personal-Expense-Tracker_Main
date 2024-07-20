import React from 'react';
import expenseService from '../services/expenseService';
import { FaTrash, FaEdit } from 'react-icons/fa';

function ExpenseList({ expenses, setExpenses }) {
  const handleDelete = async (id) => {
    try {
      await expenseService.deleteExpense(id);
      setExpenses(expenses.filter((expense) => expense._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (id) => {
    console.log(`Edit expense with ID: ${id}`);
    // Implement the logic for editing an expense here
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id} className="bg-white p-6 shadow-lg rounded-lg mb-6 flex justify-between items-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-lg leading-relaxed font-medium space-y-2">
              <p><strong>Date:</strong> {new Date(expense.date).toLocaleDateString()}</p>
              <p><strong>Amount:</strong> ${expense.amount}</p>
              <p><strong>Category:</strong> {expense.category}</p>
              <p><strong>Description:</strong> {expense.description}</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleEdit(expense._id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition duration-300"
              >
                <FaEdit />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(expense._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition duration-300"
              >
                <FaTrash />
                <span>Delete</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
