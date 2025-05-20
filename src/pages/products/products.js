import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import {
  FaSearch,
  FaFilter,
  FaDownload,
  FaPlus,
  FaEllipsisV,
  FaEdit,
  FaTrash,
  FaBox,
  FaShoppingCart,
  FaChartLine,
  FaExclamationTriangle,
} from "react-icons/fa";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "لپ تاپ لنوو",
      category: "الکترونیک",
      price: "۲۵,۰۰۰,۰۰۰",
      stock: 15,
      status: "موجود",
      sales: 45,
    },
    {
      id: 2,
      name: "هدفون سونی",
      category: "الکترونیک",
      price: "۲,۵۰۰,۰۰۰",
      stock: 8,
      status: "موجود",
      sales: 32,
    },
    {
      id: 3,
      name: "کتاب مدیریت",
      category: "کتاب",
      price: "۱۵۰,۰۰۰",
      stock: 0,
      status: "ناموجود",
      sales: 18,
    },
    {
      id: 4,
      name: "ماوس گیمینگ",
      category: "الکترونیک",
      price: "۸۰۰,۰۰۰",
      stock: 25,
      status: "موجود",
      sales: 67,
    },
    {
      id: 5,
      name: "کیبورد مکانیکال",
      category: "الکترونیک",
      price: "۱,۲۰۰,۰۰۰",
      stock: 12,
      status: "موجود",
      sales: 29,
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
            مدیریت محصولات
          </h1>
          <p className="text-gray-600 text-right mt-2">
            مدیریت و مشاهده اطلاعات محصولات
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-end">
              <div className="p-3 rounded-full bg-blue-100 text-blue-500">
                <FaBox className="text-xl" />
              </div>
              <div className="mr-4 text-right">
                <p className="text-gray-500">کل محصولات</p>
                <h3 className="text-2xl font-bold">۱۲۵</h3>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-end">
              <div className="p-3 rounded-full bg-green-100 text-green-500">
                <FaShoppingCart className="text-xl" />
              </div>
              <div className="mr-4 text-right">
                <p className="text-gray-500">فروش امروز</p>
                <h3 className="text-2xl font-bold">۲۵</h3>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-end">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
                <FaExclamationTriangle className="text-xl" />
              </div>
              <div className="mr-4 text-right">
                <p className="text-gray-500">موجودی کم</p>
                <h3 className="text-2xl font-bold">۸</h3>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-end">
              <div className="p-3 rounded-full bg-purple-100 text-purple-500">
                <FaChartLine className="text-xl" />
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
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 transition-colors duration-200">
                <FaPlus className="ml-2" />
                افزودن محصول
              </button>
              <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg flex items-center hover:bg-gray-200 transition-colors duration-200">
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
              <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg flex items-center hover:bg-gray-200 transition-colors duration-200">
                <FaFilter className="ml-2" />
                فیلتر
              </button>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    نام محصول
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    دسته‌بندی
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    قیمت
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    موجودی
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    وضعیت
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    فروش
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    عملیات
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm font-medium text-gray-900">
                        {product.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-500">
                        {product.category}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-500">
                        {product.price} تومان
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-500">
                        {product.stock}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          product.status === "موجود"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-500">
                        {product.sales}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
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

export default Products;
