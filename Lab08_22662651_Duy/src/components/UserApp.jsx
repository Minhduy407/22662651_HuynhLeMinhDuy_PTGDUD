// src/components/UserApp.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/user/userSlice";

export default function UserApp() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="my-4 p-4 border rounded shadow bg-white dark:bg-gray-800 dark:text-white">
      <h2 className="text-xl font-bold mb-4">Bài 6: Danh sách người dùng từ API</h2>
      {status === "loading" && <p>Đang tải dữ liệu...</p>}
      {status === "failed" && <p className="text-red-500">Lỗi: {error}</p>}
      {status === "succeeded" && (
        <ul className="list-disc pl-5 space-y-1">
          {users.map((user) => (
            <li key={user.id}>
              {user.name} – <span className="text-sm text-gray-500">{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
