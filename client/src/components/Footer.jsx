import React from "react";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12 mt-16 sm:mt-24">
      <div className="flex items-center justify-center sm:justify-start">
        {/* Uncomment and style the logo if needed */}
        {/* <img
          src={assets.logo}
          alt="Book Haven Logo"
          className="w-24 sm:w-32 md:w-36 mb-5 transition-transform transform hover:scale-110 duration-300 ease-in-out"
        /> */}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <p className="text-sm">
            Book Haven is your one-stop destination for timeless classics,
            modern bestsellers, and everything in between. We believe in the
            power of stories to transform lives.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="hover:text-blue-400 transition duration-200"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="hover:text-blue-400 transition duration-200"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:support@bookhaven.com"
                className="hover:text-blue-400 transition duration-200"
              >
                support@bookhaven.com
              </a>
            </li>
            <li>
              <span className="font-medium">Phone:</span>{" "}
              <a
                href="tel:+123456789"
                className="hover:text-blue-400 transition duration-200"
              >
                09057746296, 07039836610
              </a>
            </li>
            <li>
              <span className="font-medium">Address:</span>{" "}
              123 Book Street, Library City, BK 12345
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-500 transition duration-200"
            >
              <i className="fab fa-facebook-f text-white"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded-full hover:bg-blue-300 transition duration-200"
            >
              <i className="fab fa-twitter text-white"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-pink-600 rounded-full hover:bg-pink-500 transition duration-200"
            >
              <i className="fab fa-instagram text-white"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-700 rounded-full hover:bg-blue-600 transition duration-200"
            >
              <i className="fab fa-linkedin-in text-white"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>&copy; 2025 Book Haven. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
