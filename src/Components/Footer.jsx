import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">🍴 Cafe Himalayan</h2>
          <p>Your go-to destination for fresh, fast, and flavorful online food ordering.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/order" className="hover:text-white">Order</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/orders" className="hover:text-white">My Orders</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:support@cafehimalayna.com"
              className="text-gray-300 hover:text-orange-400 "
            >
              support@cafehimalayna.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+919876543210"
              className="text-gray-300 hover:text-orange-400 "
            >
              +91 98765 43210
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Cafe Himalayan Subsidiary of Star Restaurants. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
