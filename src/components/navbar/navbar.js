import React from "react";
import { FaSearch, FaBell, FaEnvelope, FaChevronDown } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 right-0 lg:right-64 left-0 h-16 bg-white shadow-sm z-10">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between mr-10">
        {/* Search Bar */}
        <div className="hidden sm:flex flex-1 max-w-xl mr-9">
          <div className="relative">
            <input
              type="text"
              placeholder="جستجو..."
              className="w-full pr-10 pl-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-right"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <FaSearch size={16} />
            </div>
          </div>
        </div>

        {/* Right Side Items */}
        <div className="flex items-center space-x-2 lg:space-x-4 space-x-reverse">
          {/* Notifications */}
          <div className="relative">
            <button className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none">
              <FaBell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* Messages */}
          <div className="relative">
            <button className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none">
              <FaEnvelope size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2 lg:space-x-3 space-x-reverse">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-700">علی محمدی</p>
              <p className="text-xs text-gray-500">مدیر سیستم</p>
            </div>
            <div className="relative">
              <button className="flex items-center focus:outline-none">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="https://ui-avatars.com/api/?name=علی+محمدی&background=0D8ABC&color=fff"
                  alt="User avatar"
                />
                <FaChevronDown className="mr-2 text-gray-500" size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
