import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { to: "/", label: "داشبورد", icon: <FaHome /> },
    { to: "/customers", label: "کاربران", icon: <FaUsers /> },
    { to: "/products", label: "محصولات", icon: <FaBox /> },
    { to: "/orders", label: "سفارشات", icon: <FaShoppingCart /> },
    { to: "/settings", label: "تنظیمات", icon: <FaCog /> },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 lg:hidden bg-white text-purple-600 p-2 rounded-full shadow-md border border-gray-200 hover:bg-gradient-to-l hover:from-purple-500 hover:via-pink-400 hover:to-blue-400 hover:text-white transition-all duration-200"
        aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
      >
        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-72 bg-white/90 backdrop-blur-md text-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 border-l border-gray-100
          ${isOpen ? "translate-x-0" : "translate-x-full"} lg:translate-x-0`}
      >
        {/* Logo and Title */}
        <div className="flex items-center justify-end px-8 py-8 mb-4 select-none border-b border-gray-100">
          <span className="font-bold text-2xl bg-gradient-to-l from-purple-600 to-blue-500 bg-clip-text text-transparent">
            پنل مدیریت
          </span>
        </div>
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-6 py-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`flex items-center justify-end px-6 py-3.5 rounded-xl font-medium transition-all duration-200 text-base space-x-3 space-x-reverse
                      ${
                        isActive
                          ? "bg-gradient-to-l from-purple-500 via-pink-400 to-blue-400 text-white shadow-lg"
                          : "text-gray-600 hover:bg-gray-50 hover:text-purple-600"
                      }
                    `}
                    onClick={() => window.innerWidth < 1024 && toggleSidebar()}
                  >
                    <span
                      className={`ml-3 text-lg flex items-center justify-center rounded-lg w-9 h-9 transition-all duration-200 ${
                        isActive
                          ? "bg-white/20"
                          : "bg-gray-50 group-hover:bg-purple-50"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
