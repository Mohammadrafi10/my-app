import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
function Customers() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="mr-0 lg:mr-64 p-4 lg:p-8 bg-gray-100 min-h-screen mt-16 lg:mt-10 transition-all duration-300">
        <h2>this is customers page</h2>
      </div>
    </>
  );
}
export default Customers;
