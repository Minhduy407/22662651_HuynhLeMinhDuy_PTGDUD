import React from "react";

const Button = ({ text }) => {
  return (
    <button style={{ backgroundColor: "#8B4513" }} className="w-full text-white py-3 rounded text-sm tracking-widest flex items-center justify-center cursor-pointer hover:bg-orange-700 transition" >
      {text}
      <span className="ml-2">→</span>
    </button>
  );
};

export default Button;
