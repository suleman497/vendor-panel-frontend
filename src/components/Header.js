



// import { Link } from "react-router-dom";
// import { ShoppingCart, HelpCircle, ClipboardList, User } from "lucide-react";
// import logo from "../logo/sparepartslogo.jpg";
// import { useState, useRef } from "react";

// export default function Header() {
//   const [showLoginDropdown, setShowLoginDropdown] = useState(false);
//   const hideTimeout = useRef(null);

//   const handleMouseEnter = () => {
//     clearTimeout(hideTimeout.current);
//     setShowLoginDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     hideTimeout.current = setTimeout(() => {
//       setShowLoginDropdown(false);
//     }, 300); // Delay to allow user to move the mouse to the dropdown
//   };

//   return (
//     <header className="bg-white shadow-md py-3 px-6 flex flex-wrap items-center justify-between border-b-2 border-orange-500">
//       {/* Left: Logo & Callback */}
//       <div className="flex items-center gap-4">
//         <img src={logo} alt="Logo" className="h-16 w-auto" />
//         <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded">
//           Request a Call Back
//         </button>
//       </div>

//       {/* Center: Navigation */}
//       <nav className="hidden lg:flex gap-6 text-black font-semibold">
//         <Link to="/" className="hover:text-orange-500">Home</Link>
//         <Link to="/about" className="hover:text-orange-500">About Us</Link>
//         <Link to="/contact" className="hover:text-orange-500">Contact Us</Link>
//         <Link to="/shop" className="hover:text-orange-500">Shop</Link>

//       </nav>

//       {/* Right: Icons + Login */}
//       <div className="flex items-center gap-4 relative">
//         <Link to="/cart" title="Cart">
//           <ShoppingCart className="text-gray-700 hover:text-orange-500" />
//         </Link>
//         <Link to="/orders" title="My Orders">
//           <ClipboardList className="text-gray-700 hover:text-orange-500" />
//         </Link>
//         <Link to="/help" title="Help Center">
//           <HelpCircle className="text-gray-700 hover:text-orange-500" />
//         </Link>

//         {/* Login Dropdown */}
//         <div
//           className="relative"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <button className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded flex items-center gap-1">
//             <User size={16} />
//             Login
//           </button>

//           {showLoginDropdown && (
//             <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10 text-sm">
//               <Link
//                 to="/buyer-login"
//                 className="block px-4 py-2 hover:bg-orange-100 text-black"
//               >
//                 Buyer Login
//               </Link>
//               <Link
//                 to="/login"
//                 className="block px-4 py-2 hover:bg-orange-100 text-black"
//               >
//                 Seller Login
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }








// import { Link } from "react-router-dom";
// import { ShoppingCart, HelpCircle, ClipboardList, User } from "lucide-react";
// import logo from "../logo/sparepartslogo.jpg";
// import { useState, useRef } from "react";
// import { useCart } from "../components/CartContext"; // adjust path as needed

// export default function Header() {
//   const [showLoginDropdown, setShowLoginDropdown] = useState(false);
//   const hideTimeout = useRef(null);
//   const { cartItems } = useCart(); // 🛒 Get cart items

//   const handleMouseEnter = () => {
//     clearTimeout(hideTimeout.current);
//     setShowLoginDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     hideTimeout.current = setTimeout(() => {
//       setShowLoginDropdown(false);
//     }, 300);
//   };

//   return (
//     <header className="bg-white shadow-md py-3 px-6 flex flex-wrap items-center justify-between border-b-2 border-orange-500">
//       <div className="flex items-center gap-4">
//         <img src={logo} alt="Logo" className="h-16 w-auto" />
//         <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded">
//           Request a Call Back
//         </button>
//       </div>

//       <nav className="hidden lg:flex gap-6 text-black font-semibold">
//         <Link to="/" className="hover:text-orange-500">Home</Link>
//         <Link to="/about" className="hover:text-orange-500">About Us</Link>
//         <Link to="/contact" className="hover:text-orange-500">Contact Us</Link>
//         <Link to="/shop" className="hover:text-orange-500">Shop</Link>
//       </nav>

//       <div className="flex items-center gap-4 relative">
//         <Link to="/cart" title="Cart" className="relative">
//           <ShoppingCart className="text-gray-700 hover:text-orange-500" />
//           {cartItems.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//               {cartItems.length}
//             </span>
//           )}
//         </Link>

//         <Link to="/orders" title="My Orders">
//           <ClipboardList className="text-gray-700 hover:text-orange-500" />
//         </Link>
//         <Link to="/help" title="Help Center">
//           <HelpCircle className="text-gray-700 hover:text-orange-500" />
//         </Link>

//         <div
//           className="relative"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <button className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded flex items-center gap-1">
//             <User size={16} />
//             Login
//           </button>

//           {showLoginDropdown && (
//             <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10 text-sm">
//               <Link to="/loginuser" className="block px-4 py-2 hover:bg-orange-100 text-black">
//                 Buyer Login
//               </Link>
//               <Link to="/vendor/login" className="block px-4 py-2 hover:bg-orange-100 text-black">
//                 Seller Login
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }



import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, HelpCircle, ClipboardList, User, LogOut } from "lucide-react";
import logo from "../logo/sparepartslogo.jpg";
import { useState, useRef, useEffect } from "react";
import { useCart } from "../components/CartContext"; // adjust path as needed

export default function Header() {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const hideTimeout = useRef(null);
  const { cartItems } = useCart(); // 🛒 Get cart items
  const navigate = useNavigate();

  // Check login status on mount
  useEffect(() => {
    const userInfo = sessionStorage.getItem("userInfo");
    setIsLoggedIn(!!userInfo);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("userInfo");
    setIsLoggedIn(false);
    navigate("/"); // Redirect after logout
  };

  const handleMouseEnter = () => {
    clearTimeout(hideTimeout.current);
    setShowLoginDropdown(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setShowLoginDropdown(false);
    }, 300);
  };

  return (
    <header className="bg-white shadow-md py-3 px-6 flex flex-wrap items-center justify-between border-b-2 border-orange-500">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded">
          Request a Call Back
        </button>
      </div>

      <nav className="hidden lg:flex gap-6 text-black font-semibold">
        <Link to="/" className="hover:text-orange-500">Home</Link>
        <Link to="/about" className="hover:text-orange-500">About Us</Link>
        <Link to="/contact" className="hover:text-orange-500">Contact Us</Link>
        <Link to="/shop" className="hover:text-orange-500">Shop</Link>
      </nav>

      <div className="flex items-center gap-4 relative">
        <Link to="/cart" title="Cart" className="relative">
          <ShoppingCart className="text-gray-700 hover:text-orange-500" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>

        <Link to="/order" title="My Orders">
          <ClipboardList className="text-gray-700 hover:text-orange-500" />
        </Link>
        <Link to="/help" title="Help Center">
          <HelpCircle className="text-gray-700 hover:text-orange-500" />
        </Link>

        {/* Login / Logout Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded flex items-center gap-1"
          >
            <LogOut size={16} />
            Logout
          </button>
        ) : (
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded flex items-center gap-1">
              <User size={16} />
              Login
            </button>

            {showLoginDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10 text-sm">
                <Link to="/loginuser" className="block px-4 py-2 hover:bg-orange-100 text-black">
                  Buyer Login
                </Link>
                <Link to="/vendor/login" className="block px-4 py-2 hover:bg-orange-100 text-black">
                  Seller Login
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
