import React from 'react';

function Dropdown({ items }) {
  return (
    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-md z-10">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href || "#"}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default Dropdown;