// src/components/AuthApp.jsx
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/auth/authSlice";
import { useState } from "react";

export default function AuthApp() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      dispatch(login(formData));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="my-4 p-4 rounded border shadow bg-white dark:bg-gray-800 dark:text-white">
      <h2 className="text-xl font-bold mb-4">Bài 5: Đăng nhập</h2>

      {isLoggedIn ? (
        <div>
          <p className="mb-2">Chào, <strong>{user.name}</strong>!</p>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">Email: {user.email}</p>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Đăng xuất
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            placeholder="Tên người dùng"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Đăng nhập
          </button>
        </form>
      )}
    </div>
  );
}
