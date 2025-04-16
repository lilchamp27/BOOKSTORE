import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  text-gray-800 flex flex-col items-center px-8 py-16">
      {/* Header Section */}
      <div className="max-w-5xl text-center mb-16">
        <h1 className="text-5xl font-bold tracking-wider text-gray-900">
          Welcome to <span className="text-blue-700">Book Haven</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          A place where stories come alive, and readers find their sanctuary. At Book Haven, we believe books hold the key to endless adventures, learning, and inspiration. Let us guide you to your next favorite escape.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-5xl mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-transparent to-gold-200 rounded-lg opacity-50 blur-xl"></div>
        <img
          src="https://via.placeholder.com/1000x500"
          alt="A beautiful library"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Our Mission Section */}
      <div className="max-w-4xl text-center mb-16">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          To inspire a love for reading and create a community where book lovers can come together. We strive to curate the finest selection of books, from timeless classics to contemporary gems, catering to readers of all kinds.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-4xl text-center mb-16">
        <h2 className="text-3xl font-semibold text-gold-600 mb-6">
          Why Choose Book Haven?
        </h2>
        <ul className="list-none space-y-4">
          <li className="text-lg text-gray-700 flex items-center justify-center gap-2">
            <span className="w-3 h-3 bg-blue-700 rounded-full"></span>
            A carefully curated selection of books across all genres.
          </li>
          <li className="text-lg text-gray-700 flex items-center justify-center gap-2">
            <span className="w-3 h-3 bg-blue-700 rounded-full"></span>
            A seamless and elegant shopping experience.
          </li>
          <li className="text-lg text-gray-700 flex items-center justify-center gap-2">
            <span className="w-3 h-3 bg-blue-700 rounded-full"></span>
            A thriving community of passionate readers.
          </li>
          <li className="text-lg text-gray-700 flex items-center justify-center gap-2">
            <span className="w-3 h-3 bg-blue-700 rounded-full"></span>
            Exclusive offers and events for our members.
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl font-medium text-gray-800 mb-6">
          Ready to discover your next favorite book?
        </h3>
        <button className="px-10 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-700 to-gold-600 rounded-full shadow-lg hover:opacity-90 transform hover:scale-105 transition-all">
          Explore Our Collection
        </button>
      </div>
    </div>
  );
};

export default About;
