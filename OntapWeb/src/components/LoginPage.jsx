import React, { useState } from "react";
import Button from "./Button";

const LoginPage = () => {
  const [password, setPassword] = useState("");

  const checkLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUpperLower = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 relative h-64 lg:h-auto">
        <img
          src="/src/assets/login_image.png"
          alt="Left side visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay with logo */}
        <div className="relative p-6 lg:p-8 z-10">
          <h1 className="text-white text-3xl font-bold">
            <span className="text-orange-800">M</span>ODEVA
          </h1>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-12 lg:p-16">
        <h2 className="text-3xl md:text-4xl font-serif mb-8">SIGN IN</h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">EMAIL</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">PASSWORD</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <span className="toggle-password absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer">
            
              </span>
            </div>
            <ul className="text-xs text-gray-600 mt-2 space-y-1">
              <li className={checkLength ? "text-green-600" : ""}>
                {checkLength ? "✔" : "●"} Minimum 8 characters
              </li>
              <li className={hasNumber ? "text-green-600" : ""}>
                {hasNumber ? "✔" : "●"} Must contain at least 1 number
              </li>
              <li className={hasUpperLower ? "text-green-600" : ""}>
                {hasUpperLower ? "✔" : "●"} Must contain at least 1 capital case and 1 small case
              </li>
              <li className={hasSymbol ? "text-green-600" : ""}>
                {hasSymbol ? "✔" : "●"} Must contain at least 1 symbol
              </li>
            </ul>
          </div>

          <Button text="BUTTON" />

          <p className="text-sm text-gray-700">
            Don’t have account? <a href="#" className="underline">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
