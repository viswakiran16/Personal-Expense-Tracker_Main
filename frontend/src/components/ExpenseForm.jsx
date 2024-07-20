import React, { useState } from 'react';
import expenseService from '../services/expenseService';

function ExpenseForm({ setExpenses }) {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newExpense = { date, amount, category, description };
      const data = await expenseService.addExpense(newExpense);
      setExpenses((prevExpenses) => [...prevExpenses, data]);
      setDate('');
      setAmount('');
      setCategory('');
      setDescription('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg mb-6 w-full max-w-md">
        <h2 className="text-2xl mb-6 font-bold text-center text-blue-600">Add Expense</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
