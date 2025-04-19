import React, { useState } from 'react';

export default function AddUserModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    Name: '',
    Company: '',
    Ordervalue: '',
    date: '',
    status: 'new',
    avatar: 'default.jpg',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://67cd2e68dd7651e464ed8f46.mockapi.io/api/v1/id', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const newUser = await res.json();
    onAdd(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="Name" placeholder="Name" required className="w-full p-2 border rounded" onChange={handleChange} />
          <input name="Company" placeholder="Company" required className="w-full p-2 border rounded" onChange={handleChange} />
          <input name="Ordervalue" placeholder="Order Value" required className="w-full p-2 border rounded" onChange={handleChange} />
          <input name="date" placeholder="Date (dd/mm/yyyy)" required className="w-full p-2 border rounded" onChange={handleChange} />
          <select name="status" className="w-full p-2 border rounded" onChange={handleChange}>
            <option value="new">New</option>
            <option value="in-progress">In-progress</option>
            <option value="completed">Completed</option>
          </select>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-1 bg-gray-200 rounded">Cancel</button>
            <button type="submit" className="px-4 py-1 bg-pink-500 text-white rounded">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
