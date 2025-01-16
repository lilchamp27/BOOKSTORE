import React from "react";

const Newsletter = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className="py-12 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 mb-4">
          Stay Connected with Our Newsletter
        </h2>
        <p className="font-medium text-lg sm:text-xl text-gray-600 mb-8">
          Be the first to know about our latest collections, book recommendations, and exclusive offers.
        </p>
        {/* Form */}
        <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 px-5 py-3 rounded-md border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-green-600  text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
        {/* Privacy Note */}
        <p className="text-sm mt-6 text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
