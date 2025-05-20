import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 lg:hidden bg-gray-400 text-white p-2 rounded-md"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-100 bg-opacity-200 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"} lg:translate-x-0`}
      >
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-right">پنل مدیریت</h2>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center justify-end px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                onClick={() => window.innerWidth < 1024 && toggleSidebar()}
              >
                <span className="ml-3">داشبورد</span>
                <FaHome size={20} />
              </Link>
            </li>
            <li>
              <Link
                to="/customers"
                className="flex items-center justify-end px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                onClick={() => window.innerWidth < 1024 && toggleSidebar()}
              >
                <span className="ml-3">کاربران</span>
                <FaUsers size={20} />
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="flex items-center justify-end px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                onClick={() => window.innerWidth < 1024 && toggleSidebar()}
              >
                <span className="ml-3">محصولات</span>
                <FaBox size={20} />
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className="flex items-center justify-end px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                onClick={() => window.innerWidth < 1024 && toggleSidebar()}
              >
                <span className="ml-3">سفارشات</span>
                <FaShoppingCart size={20} />
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center justify-end px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                onClick={() => window.innerWidth < 1024 && toggleSidebar()}
              >
                <span className="ml-3">تنظیمات</span>
                <FaCog size={20} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
