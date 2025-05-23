import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '@/context/ShopContext';
import { Moon, Sun, Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
<header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 transition-colors">
<div className="w-full h-20 max-w-screen-2xl mx-auto flex items-center justify-between px-6">

        {/* Logo & Branding */}
        <Link to="/" className="flex items-center gap-3">
          <img src={assets.logo} alt="Book Haven Logo" className="w-10" />
          <span className="text-xl font-bold text-blue-700 dark:text-white tracking-wide">Book Haven</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 font-medium text-gray-700 dark:text-gray-100">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `relative pb-1 transition hover:text-blue-700 dark:hover:text-blue-400 ${
                  isActive ? 'text-blue-700 dark:text-blue-400 after:absolute after:w-full after:h-[2px] after:bg-blue-700 dark:after:bg-blue-400 after:bottom-0 after:left-0' : ''
                }`
              }
            >
              {item.name.toUpperCase()}
            </NavLink>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <button onClick={() => setShowSearch(true)} className="hover:scale-110 transition">
            <Search className="w-6 h-6 text-gray-700 dark:text-gray-100" />
          </button>

          {/* Profile Dropdown */}
          <div className="relative group">
            <Link to="/login">
              <User className="w-6 h-6 text-gray-700 dark:text-gray-100 cursor-pointer" />
            </Link>
            <div className="absolute right-0 mt-3 hidden group-hover:block bg-white dark:bg-gray-800 rounded-md shadow-lg p-4 z-50 w-40 text-sm text-gray-600 dark:text-gray-200">
              <p className="hover:text-black dark:hover:text-white cursor-pointer py-1">My Profile</p>
              <p className="hover:text-black dark:hover:text-white cursor-pointer py-1">Orders</p>
              <p className="hover:text-black dark:hover:text-white cursor-pointer py-1">Logout</p>
            </div>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-100" />
            <span className="absolute -top-2 -right-2 text-[10px] w-5 h-5 flex items-center justify-center rounded-full bg-black text-white">
              {getCartCount()}
            </span>
          </Link>

          {/* Dark Mode Toggle */}
          <button onClick={() => setDarkMode(!darkMode)} className="text-gray-700 dark:text-gray-100">
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(true)} className="md:hidden text-gray-700 dark:text-gray-100">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-50 transform ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <p className="font-semibold text-gray-700 dark:text-gray-100">Menu</p>
          <button onClick={() => setMobileOpen(false)}>
            <X className="w-6 h-6 text-gray-700 dark:text-gray-100" />
          </button>
        </div>
        <nav className="flex flex-col text-gray-700 dark:text-gray-100 text-base p-4 space-y-4">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="hover:text-blue-700 dark:hover:text-blue-400 border-b border-gray-200 dark:border-gray-700 pb-2"
            >
              {item.name.toUpperCase()}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
