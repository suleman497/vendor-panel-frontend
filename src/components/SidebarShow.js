// import { Link } from 'react-router-dom';

// export default function Sidebar() {
//   return (
//     <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
//       <h1 className="text-2xl font-bold mb-6">Vendor Panel</h1>
//       <Link to="/" className="mb-2 hover:text-green-400">Dashboard</Link>
//       <Link to="/add-product" className="mb-2 hover:text-green-400">Add Product</Link>
//       <Link to="/view-products" className="mb-2 hover:text-green-400">View Products</Link>
//     </div>
//   );
// }



// import { Link } from 'react-router-dom';

// export default function SidebarShow() {
//   return (
//     <div className="bg-gray-800 text-white w-64 h-screen p-4">
//       <h1 className="text-xl font-bold mb-4">Vendor Panel</h1>
//       <Link to="/" className="block mb-2">Dashboard</Link>
//       <Link to="/add-product" className="block mb-2">Add Product</Link>
//       <Link to="/view-products" className="block">View Products</Link>
//     </div>
//   );
// }



// import { Link, useNavigate } from 'react-router-dom';

// export default function SidebarShow() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("vendorToken");
//     localStorage.removeItem("vendorInfo");
//     navigate("/login");
//   };

//   return (
//     <div className="bg-gray-800 text-white w-64 h-screen p-4 flex flex-col justify-between">
//       <div>
//         <h1 className="text-xl font-bold mb-4">Vendor Panel</h1>
//         <Link to="/" className="block mb-2 hover:text-green-400">Dashboard</Link>
//         <Link to="/add-product" className="block mb-2 hover:text-green-400">Add Product</Link>
//         <Link to="/view-products" className="block hover:text-green-400">View Products</Link>
//       </div>

//       <button
//         onClick={handleLogout}
//         className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }




import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaPlusSquare,
  FaBoxOpen,
  FaSignOutAlt
} from 'react-icons/fa';
import logo from '../logo/sparepartslogo.jpg'; // Replace with actual vendor logo if needed

export default function SidebarShow() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("vendorToken");
    localStorage.removeItem("vendorInfo");
    navigate("/login");
  };

  const linkClass = (path) =>
    location.pathname === path
      ? "flex items-center gap-2 mb-3 text-white font-semibold"
      : "flex items-center gap-2 mb-3 text-gray-400 hover:text-green-400";

  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4 flex flex-col justify-between">
      <div>
        {/* ✅ Vendor Logo and Heading */}
        <div className="flex items-center gap-2 mb-6">
          <img src={logo} alt="Vendor Logo" className="w-11 h-13 rounded-full shadow-md" />
          <h1 className="text-xl font-bold text-green-400">Vendor Panel</h1>
        </div>

        {/* ✅ Navigation Links */}
        <nav>
          <Link to="/vendor/" className={linkClass("/")}>
            <FaTachometerAlt /> Dashboard
          </Link>
          <Link to="/vendor/add-product" className={linkClass("/add-product")}>
            <FaPlusSquare /> Add Product
          </Link>
          <Link to="/vendor/view-products" className={linkClass("/view-products")}>
            <FaBoxOpen /> View Products
          </Link>
        </nav>
      </div>

      {/* ✅ Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
      >
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
}
