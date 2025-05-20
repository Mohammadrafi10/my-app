import React from "react";

function Content() {
  return (
    <div className="mr-0 lg:mr-64 p-4 lg:p-8 bg-gray-100 min-h-screen mt-16 lg:mt-10 transition-all duration-300">
      {/* Header Section */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 text-right">
          خوش آمدید
        </h1>
        <p className="text-gray-600 text-right mt-2">به پنل مدیریت خوش آمدید</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <div className="bg-white rounded-lg shadow p-4 lg:p-6 text-right">
          <div className="flex items-center justify-end">
            <div className="p-2 lg:p-3 rounded-full bg-blue-100 text-blue-500">
              <i className="fas fa-users text-lg lg:text-xl"></i>
            </div>
            <div className="mr-3 lg:mr-4">
              <p className="text-gray-500 text-sm lg:text-base">کاربران</p>
              <h3 className="text-xl lg:text-2xl font-bold">۲,۵۴۳</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 lg:p-6 text-right">
          <div className="flex items-center justify-end">
            <div className="p-2 lg:p-3 rounded-full bg-green-100 text-green-500">
              <i className="fas fa-shopping-cart text-lg lg:text-xl"></i>
            </div>
            <div className="mr-3 lg:mr-4">
              <p className="text-gray-500 text-sm lg:text-base">سفارشات</p>
              <h3 className="text-xl lg:text-2xl font-bold">۱,۲۳۴</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 lg:p-6 text-right">
          <div className="flex items-center justify-end">
            <div className="p-2 lg:p-3 rounded-full bg-yellow-100 text-yellow-500">
              <i className="fas fa-box text-lg lg:text-xl"></i>
            </div>
            <div className="mr-3 lg:mr-4">
              <p className="text-gray-500 text-sm lg:text-base">محصولات</p>
              <h3 className="text-xl lg:text-2xl font-bold">۸۵۶</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 lg:p-6 text-right">
          <div className="flex items-center justify-end">
            <div className="p-2 lg:p-3 rounded-full bg-purple-100 text-purple-500">
              <i className="fas fa-chart-line text-lg lg:text-xl"></i>
            </div>
            <div className="mr-3 lg:mr-4">
              <p className="text-gray-500 text-sm lg:text-base">درآمد</p>
              <h3 className="text-xl lg:text-2xl font-bold">۱۲۵,۰۰۰,۰۰۰</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-lg shadow p-4 lg:p-6">
        <h2 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 text-right">
          فعالیت‌های اخیر
        </h2>
        <div className="space-y-3 lg:space-y-4">
          <div className="flex items-center justify-end border-b pb-3 lg:pb-4">
            <div className="mr-3 lg:mr-4">
              <p className="text-gray-800 text-sm lg:text-base">
                سفارش جدید ثبت شد
              </p>
              <p className="text-xs lg:text-sm text-gray-500">۲ ساعت پیش</p>
            </div>
            <div className="p-2 rounded-full bg-blue-100 text-blue-500">
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
          <div className="flex items-center justify-end border-b pb-3 lg:pb-4">
            <div className="mr-3 lg:mr-4">
              <p className="text-gray-800 text-sm lg:text-base">
                کاربر جدید ثبت نام کرد
              </p>
              <p className="text-xs lg:text-sm text-gray-500">۳ ساعت پیش</p>
            </div>
            <div className="p-2 rounded-full bg-green-100 text-green-500">
              <i className="fas fa-user-plus"></i>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="mr-3 lg:mr-4">
              <p className="text-gray-800 text-sm lg:text-base">
                محصول جدید اضافه شد
              </p>
              <p className="text-xs lg:text-sm text-gray-500">۵ ساعت پیش</p>
            </div>
            <div className="p-2 rounded-full bg-yellow-100 text-yellow-500">
              <i className="fas fa-box"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
