// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import AddProduct from './pages/AddProduct';
// import ViewProducts from './pages/ViewProducts';
// import Sidebar from './components/SidebarShow';
// import EditProduct from './pages/EditProduct';
// import Register from './pages/Register';
// import { isVendorLoggedIn } from './utils/auth';
// import Login from './pages/Login';
// import AdminLog from "./pages/admin/AdminLogin";



// function App() {
//   return (
//     <Router>
//       <Routes>

//         {/* Standalone Routes (no sidebar) */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//           <Route path="/admin/login" element={<AdminLog/>} />


//         {/* Dashboard Routes (with sidebar) */}
//         <Route
//   path="/*"
//   element={
//     isVendorLoggedIn() ? (
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-4">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/add-product" element={<AddProduct />} />
//             <Route path="/view-products" element={<ViewProducts />} />
//             <Route path="/edit/:id" element={<EditProduct />} />
            
//           </Routes>
//         </div>
//       </div>
//     ) : (
//       <Register /> 
//     )
//   }
// />

//       </Routes>
//     </Router>
//   );
// }

// export default App;













// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import AddProduct from './pages/AddProduct';
// import ViewProducts from './pages/ViewProducts';
// import Sidebar from './components/SidebarShow';
// import EditProduct from './pages/EditProduct';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import AdminLogin from "./pages/admin/AdminLogin";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import AdminVendors from "./pages/admin/AdminVendors";
// import AdminLayout from "./pages/admin/AdminLayout";
// import { isVendorLoggedIn, isAdminLoggedIn } from './utils/auth';

// function App() {
//   return (
//     <Router>
//       <Routes>

//         {/* Standalone Routes (No Sidebar) */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin/login" element={<AdminLogin />} />

// {/*admin routes*/}
// <Route
//   path="/admin/*"
//   element={isAdminLoggedIn() ? <AdminLayout /> : <AdminLogin />}>
//   <Route path="dashboard" element={<AdminDashboard />} />
//   <Route path="vendors" element={<AdminVendors />} />

// </Route>


//         {/*  Vendor Protected Routes */}
//         <Route
//           path="/*"
//           element={
//             isVendorLoggedIn() ? (
//               <div className="flex">
//                 <Sidebar />
//                 <div className="flex-1 p-4">
//                   <Routes>
//                     <Route path="/" element={<Dashboard />} />
//                     <Route path="/add-product" element={<AddProduct />} />
//                     <Route path="/view-products" element={<ViewProducts />} />
//                     <Route path="/edit/:id" element={<EditProduct />} />
//                   </Routes>
//                 </div>
//               </div>
//             ) : (
//               <Register />
//             )
//           }
//         />

//       </Routes>
//     </Router>
//   );
// }

// export default App;




// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Dashboard from './pages/Dashboard';
// import AddProduct from './pages/AddProduct';
// import ViewProducts from './pages/ViewProducts';
// import EditProduct from './pages/EditProduct';
// import Register from './pages/Register';
// import Login from './pages/Login';

// import AdminLogin from "./pages/admin/AdminLogin";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import AdminVendors from "./pages/admin/AdminVendors";
// import AdminLayout from "./pages/admin/AdminLayout";
// import AdminSliderManager from './pages/admin/AdminSliderManager';
// import Sidebar from './components/SidebarShow';
// import { isVendorLoggedIn, isAdminLoggedIn } from './utils/auth';
// import AdminCategoryBanner from './pages/admin/AdminCategoryImag';
// import AdminViewProduct from './pages/admin/AdminViewProduct';
// import AdminEditProduct from './pages/admin/AdminEditProduct'
// function App() {
//   return (
//     <Router>
//       <Routes>

//         {/* Public Routes */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin/login" element={<AdminLogin />} />

//         {/* Admin Protected Routes */}
//         {isAdminLoggedIn() && (
//           <Route path="/admin/*" element={<AdminLayout />}>
//             <Route path="dashboard" element={<AdminDashboard />} />
//             <Route path="vendors" element={<AdminVendors />} />
//             <Route path="sliders" element={<AdminSliderManager />} />
//              <Route path="category-banners" element={<AdminCategoryBanner />} />
//              <Route path="products" element={<AdminViewProduct/>}/>
// <Route path="edit/:id" element={<AdminEditProduct/>} />

//           </Route>
//         )}

//         {/* Vendor Protected Routes */}
//         {isVendorLoggedIn() && (
//           <>
//             <Route
//               path="/"
//               element={
//                 <div className="flex">
//                   <Sidebar />
//                   <div className="flex-1 p-4">
//                     <Dashboard />
//                   </div>
//                 </div>
//               }
//             />
//             <Route
//               path="/add-product"
//               element={
//                 <div className="flex">
//                   <Sidebar />
//                   <div className="flex-1 p-4">
//                     <AddProduct />
//                   </div>
//                 </div>
//               }
//             />
//             <Route
//               path="/view-products"
//               element={
//                 <div className="flex">
//                   <Sidebar />
//                   <div className="flex-1 p-4">
//                     <ViewProducts />
//                   </div>
//                 </div>
//               }
//             />
//             <Route
//               path="/edit/:id"
//               element={
//                 <div className="flex">
//                   <Sidebar />
//                   <div className="flex-1 p-4">
//                     <EditProduct />
//                   </div>
//                 </div>
//               }
//             />
//           </>
//         )}

//         {/* ✅ Fallback when NOT logged in */}
//         {!isVendorLoggedIn() && !isAdminLoggedIn() && (
//           <Route path="/" element={<Register />} />
//         )}

//         {/* ✅ Catch-all route for anything else */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Register from './pages/Register';
// import Login from './pages/Login';
// import UserLayout from './pages/user/UserLayout';

// import AdminLogin from "./pages/admin/AdminLogin";
// import AdminLayout from "./pages/admin/AdminLayout";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import AdminVendors from "./pages/admin/AdminVendors";
// import AdminSliderManager from './pages/admin/AdminSliderManager';
// import AdminCategoryBanner from './pages/admin/AdminCategoryImag';
// import AdminViewProducts from './pages/admin/AdminViewProduct';
// import AdminEditProduct from './pages/admin/AdminEditProduct';
// import AdminRegister from "./pages/admin/AdminRegister"; 
// import AdminCategory from './pages/admin/AdminAddCarDetails';
// import AdminViewCarDetails from './pages/admin/AdminViewCarDetails';

// import VendorLayout from './pages/VendorLayout'; 
// import Dashboard from './pages/Dashboard';
// import AddProduct from './pages/AddProduct';
// import ViewProducts from './pages/ViewProducts';
// import EditProduct from './pages/EditProduct';

// import Home from './pages/user/Homepage'
// import Contact from './pages/user/Contact'
// function App() {
//   return (
//     <Router>
//       <Routes>

//         {/* 🔓 Public Routes */}
//         <Route path="/admin/register" element={<AdminRegister />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin/login" element={<AdminLogin />} />


//           <Route path="/" element={<UserLayout />}>
//           <Route index element={<Home />} /> {/* Home page as default */}
//           <Route path="contact" element={<Contact />} /> {/* Example page */}
//           {/* Add more user pages here */}
//         </Route>


//         {/* 🔐 Admin Protected Routes */}
//         <Route path="/admin/*" element={<AdminLayout />}>
//           <Route path="dashboard" element={<AdminDashboard />} />
//           <Route path="vendors" element={<AdminVendors />} />
//           <Route path="sliders" element={<AdminSliderManager />} />
//           <Route path="category-banners" element={<AdminCategoryBanner />} />
//      <Route path="view-products" element={<AdminViewProducts />} />
//      <Route path="edit-product/:id" element={<AdminEditProduct />} />
//      <Route path="add-category" element={<AdminCategory />} />
//      <Route path="view-car-details" element={<AdminViewCarDetails />} />

//         </Route>

//         {/* 🔐 Vendor Protected Routes */}
//         <Route path="/*" element={<VendorLayout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="add-product" element={<AddProduct />} />
//           <Route path="view-products" element={<ViewProducts />} />
//           <Route path="edit/:id" element={<EditProduct />} />
//         </Route>

//         {/* 🌐 Fallback for unknown routes */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;








import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import VendorLogin from './pages/VendorLogin';
import UserLayout from './pages/user/UserLayout';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminVendors from "./pages/admin/AdminVendors";
import AdminSliderManager from './pages/admin/AdminSliderManager';
import AdminCategoryBanner from './pages/admin/AdminCategoryImag';
import AdminViewProducts from './pages/admin/AdminViewProduct';
import AdminEditProduct from './pages/admin/AdminEditProduct';
import AdminRegister from "./pages/admin/AdminRegister"; 
import AdminCategory from './pages/admin/AdminAddCarDetails';
import AdminViewCarDetails from './pages/admin/AdminViewCarDetails';

import VendorLayout from './pages/VendorLayout'; 
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import ViewProducts from './pages/ViewProducts';
import EditProduct from './pages/EditProduct';

import Home from './pages/user/Homepage';
import Contact from './pages/user/Contact';
import About from './pages/user/About'
import ShopPage from './pages/user/ShopPage';
import ProductDetailPage from './pages/user/ProductDetailPage';
import CartPage from './pages/user/CartPage';
import Signup from './pages/user/Signup';
import PrivateRoute from './pages/user/PrivateRoute';
import LoginUser from './pages/user/LoginUser';
import AllUsersPage from './pages/admin/AllUsersPage';
import OrdersPage from './pages/user/OrderPage';
import AdminOrdersPage from './pages/admin/AdminOrderPage';
    const stripePromise = loadStripe('pk_test_51Qbg2tK29pl9G0SlXl3izpV6j0wW3jkWpSeSWahlVJwcXcWZAkiHDcR9jCFSz5ySu9BlXmHAOSu2YLQ0PrSGgLY700TjNPAztV');

function App() {
  return (
    <Router>
      <Elements stripe={stripePromise}>
    <Routes>

  {/* Public Routes */}
  <Route path="/admin/register" element={<AdminRegister />} />
  <Route path="/register" element={<Register />} />
  <Route path="/loginuser" element={<LoginUser/>} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/admin/login" element={<AdminLogin />} />
    <Route path="/vendor/login" element={<VendorLogin />} /> 

  {/* User Layout */}
  <Route path="/" element={<UserLayout />}>
    <Route index element={<Home />} />
    <Route path="contact" element={<Contact />} />
    <Route path="about" element={<About />} />
    <Route path="shop" element={<ShopPage />} />
        <Route path="order" element={<OrdersPage/>} />
    <Route path="product/:id" element={<ProductDetailPage />} />

    {/* 🔒 Protected Route: Cart */}
    {/* <Route element={<PrivateRoute />}>
      <Route path="cart" element={<CartPage />} />
    </Route>
  </Route> */}
<Route element={<PrivateRoute />}>
  <Route
    path="cart"
    element={
      <Elements stripe={stripePromise}>
        <CartPage />
      </Elements>
    }
  />
</Route>
</Route>
        {/* 🔐 Admin Protected Routes */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="vendors" element={<AdminVendors />} />
          <Route path="sliders" element={<AdminSliderManager />} />
          <Route path="category-banners" element={<AdminCategoryBanner />} />
          <Route path="view-products" element={<AdminViewProducts />} />
          <Route path="edit-product/:id" element={<AdminEditProduct />} />
          <Route path="add-category" element={<AdminCategory />} />
          <Route path="view-car-details" element={<AdminViewCarDetails />} />
          <Route path="users" element={<AllUsersPage />} />
           <Route path="orders" element={<AdminOrdersPage />} />


        </Route>

        {/* ✅ Vendor Routes (use distinct path to avoid conflict) */}
        <Route path="/vendor/*" element={<VendorLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="view-products" element={<ViewProducts />} />
          <Route path="edit/:id" element={<EditProduct />} />
        </Route>

        {/* 🌐 Fallback for unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
      </Elements>
    </Router>
  );
}

export default App;
