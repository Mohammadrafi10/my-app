import React, { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import {
  FaSearch,
  FaFilter,
  FaDownload,
  FaPlus,
  FaEllipsisV,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function Customers() {
  const [searchTerm, setSearchTerm] = useState("");

  const customers = [
    {
      id: 1,
      name: "علی محمدی",
      email: "ali@example.com",
      phone: "۰۹۱۲۳۴۵۶۷۸۹",
      status: "فعال",
      orders: 12,
      totalSpent: "۲,۵۰۰,۰۰۰",
    },
    {
      id: 2,
      name: "مریم احمدی",
      email: "maryam@example.com",
      phone: "۰۹۱۲۳۴۵۶۷۸۸",
      status: "فعال",
      orders: 8,
      totalSpent: "۱,۸۰۰,۰۰۰",
    },
    {
      id: 3,
      name: "رضا کریمی",
      email: "reza@example.com",
      phone: "۰۹۱۲۳۴۵۶۷۸۷",
      status: "غیرفعال",
      orders: 3,
      totalSpent: "۵۰۰,۰۰۰",
    },
    {
      id: 4,
      name: "سارا حسینی",
      email: "sara@example.com",
      phone: "۰۹۱۲۳۴۵۶۷۸۶",
      status: "فعال",
      orders: 15,
      totalSpent: "۳,۲۰۰,۰۰۰",
    },
    {
      id: 5,
      name: "محمد رضایی",
      email: "mohammad@example.com",
      phone: "۰۹۱۲۳۴۵۶۷۸۵",
      status: "غیرفعال",
      orders: 5,
      totalSpent: "۹۰۰,۰۰۰",
    },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="mr-0 lg:mr-64 p-4 lg:p-8 bg-gray-100 min-h-screen mt-16 lg:mt-10 transition-all duration-300">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 text-right">
            مدیریت مشتریان
          </h1>
          <p className="text-gray-600 text-right mt-2">
            مدیریت و مشاهده اطلاعات مشتریان
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-end">
              <div className="p-3 rounded-full bg-blue-100 text-blue-500">
                <i className="fas fa-users text-xl"></i>
              </div>
              <div className="mr-4 text-right">
                <p className="text-gray-500">کل مشتریان</p>
                <h3 className="text-2xl font-bold">۲۵۴</h3>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-end">
              <div className="p-3 rounded-full bg-green-100 text-green-500">
                <i className="fas fa-user-check text-xl"></i>
              </div>
              <div className="mr-4 text-right">
                <p className="text-gray-500">مشتریان فعال</p>
                <h3 className="text-2xl font-bold">۱۸۹</h3>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-end">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
                <i className="fas fa-shopping-cart text-xl"></i>
              </div>
              <div className="mr-4 text-right">
                <p className="text-gray-500">سفارشات ماه</p>
                <h3 className="text-2xl font-bold">۴۵۶</h3>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-end">
              <div className="p-3 rounded-full bg-purple-100 text-purple-500">
                <i className="fas fa-chart-line text-xl"></i>
              </div>
              <div className="mr-4 text-right">
                <p className="text-gray-500">درآمد ماه</p>
                <h3 className="text-2xl font-bold">۱۲۵,۰۰۰,۰۰۰</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 space-x-reverse">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
                <FaPlus className="ml-2" />
                افزودن مشتری
              </button>
              <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg flex items-center">
                <FaDownload className="ml-2" />
                دانلود لیست
              </button>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="relative">
                <input
                  type="text"
                  placeholder="جستجو..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 pl-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-right"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
              <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg flex items-center">
                <FaFilter className="ml-2" />
                فیلتر
              </button>
            </div>
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    نام
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ایمیل
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    شماره تماس
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    وضعیت
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    تعداد سفارشات
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    مجموع خرید
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    عملیات
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm font-medium text-gray-900">
                        {customer.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-500">
                        {customer.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-500">
                        {customer.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          customer.status === "فعال"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-500">
                        {customer.orders}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-500">
                        {customer.totalSpent} تومان
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2 space-x-reverse">
                        <button className="text-blue-600 hover:text-blue-900">
                          <FaEdit />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <FaTrash />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <FaEllipsisV />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
