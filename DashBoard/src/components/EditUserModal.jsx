import React, { useState, useEffect } from 'react';

export default function EditUserModal({ user, onClose, onSave }) {
  const [updatedUser, setUpdatedUser] = useState(user);

  useEffect(() => {
    setUpdatedUser(user);
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(updatedUser);
    onClose();  // Close modal after saving
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Edit User</h3>

        <div className="mb-4">
          <label htmlFor="Name" className="block text-sm text-gray-600">Name</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={updatedUser.Name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Company" className="block text-sm text-gray-600">Company</label>
          <input
            type="text"
            id="Company"
            name="Company"
            value={updatedUser.Company}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Ordervalue" className="block text-sm text-gray-600">Order Value</label>
          <input
            type="number"
            id="Ordervalue"
            name="Ordervalue"
            value={updatedUser.Ordervalue}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="status" className="block text-sm text-gray-600">Status</label>
          <select
            id="status"
            name="status"
            value={updatedUser.status}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="new">New</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 text-sm text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-pink-600 text-white text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
