import React from "react";
import { FaSearch, FaBell, FaEnvelope, FaChevronDown } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 right-0 lg:right-72 left-0 h-16 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm z-10">
      <div className="h-full px-6 lg:px-8 flex items-center justify-between mr-12">
        {/* Search Bar */}
        <div className="hidden sm:flex flex-1 max-w-xl">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="جستجو..."
              className="w-full pr-12 pl-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 text-right text-gray-600 placeholder-gray-400 transition-all duration-200"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FaSearch size={16} />
            </div>
          </div>
        </div>

        {/* Right Side Items */}
        <div className="flex items-center space-x-3 lg:space-x-5 space-x-reverse">
          {/* Notifications */}
          <div className="relative">
            <button className="p-2.5 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-100">
              <FaBell size={20} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>

          {/* Messages */}
          <div className="relative">
            <button className="p-2.5 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-100">
              <FaEnvelope size={20} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white"></span>
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 lg:space-x-4 space-x-reverse">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-gray-800">علی محمدی</p>
              <p className="text-xs text-gray-500">مدیر سیستم</p>
            </div>
            <div className="relative">
              <button className="flex items-center space-x-2 space-x-reverse focus:outline-none group">
                <img
                  className="h-9 w-9 rounded-xl object-cover ring-2 ring-gray-100 group-hover:ring-purple-100 transition-all duration-200"
                  src="https://ui-avatars.com/api/?name=علی+محمدی&background=0D8ABC&color=fff"
                  alt="User avatar"
                />
                <FaChevronDown
                  className="text-gray-400 group-hover:text-purple-600 transition-colors duration-200"
                  size={14}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
