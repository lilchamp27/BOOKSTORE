import React from 'react';
import { assets } from '@/assets/assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-200 flex flex-col sm:flex-row bg-gray-50">
      
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex flex-col items-start justify-center p-6 sm:p-16">
        <h1 className="prata-regular text-3xl sm:text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
          Welcome to Book Haven
        </h1>
        <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
          Discover your next great read among thousands of books, from timeless classics to the latest bestsellers.
        </p>
        <Link to={'/collection'}>
        <button className="bg-red-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-lg hover:bg-blue-700 transition">
          Browse Books
        </button>
        </Link>
      </div>

      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center p-4 sm:p-10">
        <img
          src={assets.books_collection} // Replace with the correct path or import
          alt="Books Display"
          className="rounded-lg shadow-lg w-3/4 sm:w-4/5 max-w-xs sm:max-w-none"
        />
      </div>

    </div>
  );
};

export default Hero;
