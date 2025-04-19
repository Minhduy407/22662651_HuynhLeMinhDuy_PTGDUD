import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function InputForm() {
  const [phone, setPhone] = useState("");


  return (
    <div className="max-w-md mx-auto p-6 rounded-lg">


      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">NAME</label>
        <input
          type="text"
          placeholder="Eg: John Doe"
          className="w-full border border-gray-400 p-2 rounded"
        />
      </div>

      {/* Phone Number with react-phone-number-input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">PHONE NUMBER</label>
        <PhoneInput
          placeholder="Enter phone number"
          value={phone}
          onChange={setPhone}
          defaultCountry="ID"
          className="react-phone-input w-full"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">PASSWORD</label>
        <div className="relative">
          <input
            type="password"
            placeholder="********"
            className="w-full border border-gray-400 p-2 rounded pr-10"
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-500"
          >
          </button>
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium mb-1">ADDRESS</label>
        <input
          type="text"
          placeholder="Eg: ABC Street 12A, West Java, Indonesia"
          className="w-full border border-gray-400 p-2 rounded"
        />
      </div>
    </div>
  );
}
