import { FaTh, FaProjectDiagram, FaUsers, FaChartBar, FaEnvelope, FaPlug } from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", icon: <FaTh />, active: true },
  { name: "Projects", icon: <FaProjectDiagram /> },
  { name: "Teams", icon: <FaUsers /> },
  { name: "Analytics", icon: <FaChartBar /> },
  { name: "Messages", icon: <FaEnvelope /> },
  { name: "Integrations", icon: <FaPlug /> },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r p-4 flex flex-col justify-between">
      <div>
        <img src="../src/images/Image 1858.png" alt="Logo" className="h-12 mb-6" />
        <ul className="space-y-2">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                item.active ? "bg-pink-100 text-pink-600 font-semibold" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-indigo-100 p-4 rounded-xl text-center mt-10">
        <img src="../src/images/Group.png" alt="Upgrade" className="w-full h-24 object-cover mb-2" />
        <p className="text-sm font-medium">V2.0 is available</p>
        <button className="bg-white text-indigo-600 px-4 py-1 mt-2 rounded-full text-sm font-semibold border border-indigo-600 hover:bg-indigo-50">
          Try now
        </button>
      </div>
    </div>
  );
}
