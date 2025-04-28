import React, { useState } from 'react';
import Dropdown from './Dropdown';

function NavItem({ href, dropdown, icon, children, dropdownItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (dropdown) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (dropdown) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={href || "#"}
        className={`inline-flex items-center px-4 py-2 text-gray-700 hover:text-indigo-500 ${
          icon ? 'pr-5' : ''
        }`}
      >
        {children}
        {dropdown && (
          <svg
            className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </a>
      {isOpen && dropdown && <Dropdown items={dropdownItems} />}
    </div>
  );
}

export default NavItem;