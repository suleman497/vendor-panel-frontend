import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../logo/sparepartslogo.jpg'; // Replace with your uploaded logo path

const Footer = () => {
  return (
    <footer className="bg-[#1f2e43] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1: Logo & Description */}
        <div>
          <img src={logo} alt="Logo" className="mb-4 w-40" />
          <p className="text-sm leading-relaxed">
            Leo felis sodales sed convallis purus accumsan tempus dis pellentesque class orci.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <FaCcVisa size={30} />
            <FaCcMastercard size={30} />
            <FaCcAmex size={30} />
          </div>
        </div>

        {/* Column 2: Customer Service */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Customer Service</h4>
          <ul className="text-sm space-y-2">
            <li><Link to="#">My Account</Link></li>
            <li><Link to="#">Help Center</Link></li>
            <li><Link to="#">Track My Order</Link></li>
            <li><Link to="#">Shipping & Returns</Link></li>
            <li><Link to="#">Store Location</Link></li>
          </ul>
        </div>

        {/* Column 3: Information */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Information</h4>
          <ul className="text-sm space-y-2">
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Legal Notice</Link></li>
            <li><Link to="#">Customer Reviews</Link></li>
            <li><Link to="#">Guides & Articles</Link></li>
            <li><Link to="#">Coupon Codes</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <ul className="text-sm space-y-2">
            <li>📍 Cempaka Wangi No 22 Jakarta - Indonesia</li>
            <li>📧 hello@yourdomain.tld</li>
            <li>📞 +6221-2002-2012</li>
            <li>🕒 7 Days a week from 10 am to 6 pm</li>
          </ul>
        </div>

      </div>

      {/* Bottom Social & Newsletter */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4">
          <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
          <FaInstagram className="hover:text-orange-500 cursor-pointer" />
          <FaTwitter className="hover:text-orange-500 cursor-pointer" />
        </div>

        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email..."
            className="p-2 rounded-md text-black w-64"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
