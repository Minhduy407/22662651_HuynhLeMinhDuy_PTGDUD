import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white px-6 md:px-16 py-12 text-sm" style={{ backgroundColor: "#8B4513" }}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-4">
        {/* Company Info */}
        <div className="md:w-1/4">
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-white">M</span>ODEVA
          </h1>
          <p className="mb-1">
            <span className="font-medium">WhatsApp</span>: +62 859 9999 999
          </p>
          <p className="mb-1">
            <span className="font-medium">Email</span>: hello@modeva.com
          </p>
          <p>
            <span className="font-medium">Address</span>: Lorem ipsum street Block B Number 08, Jakarta, Indonesia, 12345
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold mb-2">Menu</h3>
          <ul className="space-y-1">
            <li>Sale</li>
            <li>New Arrivals</li>
            <li>Formal Men</li>
            <li>Formal Woman</li>
            <li>Casual Men</li>
            <li>Casual Woman</li>
          </ul>
        </div>

        {/* Get Help */}
        <div>
          <h3 className="font-semibold mb-2">Get Help</h3>
          <ul className="space-y-1">
            <li>FAQ</li>
            <li>Customer Service</li>
            <li>Refund and Return</li>
            <li>Terms and Conditions</li>
            <li>Shipping</li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-2">Account</h3>
          <ul className="space-y-1">
            <li>My Account</li>
            <li>My Orders</li>
            <li>Vouchers and Discounts</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-xs text-gray-200">
        <p>All rights reserved</p>
        <p>Copyright 2023 By Modeva Fashion</p>
      </div>
    </footer>
  );
};

export default Footer;