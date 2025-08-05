



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
import {
  ShoppingCart,
  HelpCircle,
  ClipboardList,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import logo from "../logo/sparepartslogo.jpg";
import { useState, useRef, useEffect } from "react";
import { useCart } from "../components/CartContext";

export default function Header() {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const hideTimeout = useRef(null);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = sessionStorage.getItem("userInfo");
    setIsLoggedIn(!!userInfo);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("userInfo");
    setIsLoggedIn(false);
    navigate("/");
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
    <header className="bg-white shadow-md py-3 px-6 border-b-2 border-orange-500">
      <div className="flex items-center justify-between">
        {/* Logo and Call Button */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
          <button className="hidden sm:block bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded">
            Request a Call Back
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          {mobileNavOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 text-black font-semibold">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/about" className="hover:text-orange-500">About Us</Link>
          <Link to="/contact" className="hover:text-orange-500">Contact Us</Link>
          <Link to="/shop" className="hover:text-orange-500">Shop</Link>
        </nav>

        {/* Right Icons */}
        <div className="hidden lg:flex items-center gap-4 relative">
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
      </div>

      {/* Mobile Navigation Panel */}
      {mobileNavOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-4 text-sm font-semibold">
          <Link to="/" onClick={() => setMobileNavOpen(false)} className="hover:text-orange-500">Home</Link>
          <Link to="/about" onClick={() => setMobileNavOpen(false)} className="hover:text-orange-500">About Us</Link>
          <Link to="/contact" onClick={() => setMobileNavOpen(false)} className="hover:text-orange-500">Contact Us</Link>
          <Link to="/shop" onClick={() => setMobileNavOpen(false)} className="hover:text-orange-500">Shop</Link>

          <div className="flex gap-3 items-center mt-2">
            <Link to="/cart" onClick={() => setMobileNavOpen(false)} title="Cart" className="relative">
              <ShoppingCart className="text-gray-700 hover:text-orange-500" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <Link to="/order" onClick={() => setMobileNavOpen(false)} title="My Orders">
              <ClipboardList className="text-gray-700 hover:text-orange-500" />
            </Link>
            <Link to="/help" onClick={() => setMobileNavOpen(false)} title="Help Center">
              <HelpCircle className="text-gray-700 hover:text-orange-500" />
            </Link>

            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileNavOpen(false);
                }}
                className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded flex items-center gap-1"
              >
                <LogOut size={16} />
                Logout
              </button>
            ) : (
              <div className="flex flex-col gap-1 mt-2">
                <Link to="/loginuser" onClick={() => setMobileNavOpen(false)} className="bg-orange-100 px-3 py-1 rounded hover:bg-orange-200">
                  Buyer Login
                </Link>
                <Link to="/vendor/login" onClick={() => setMobileNavOpen(false)} className="bg-orange-100 px-3 py-1 rounded hover:bg-orange-200">
                  Seller Login
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

