import { FaSearch, FaBell, FaUserCircle, FaQuestion } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-white p-4 shadow-md flex items-center justify-between">
        <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-semibold text-pink-500">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-gray-100 p-2 rounded-md">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none ml-2"
          />
        </div>
        <FaBell className="text-gray-600 text-2xl" />
        <FaQuestion className="text-gray-600 text-2xl" />
        <img
          src="../src/images/Avatar (5).png"
          alt="Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
}
