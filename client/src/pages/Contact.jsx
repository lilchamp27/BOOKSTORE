import React from 'react';
import Title from '../components/Title';
import image3 from '../assets/image3.png';
import Newsletter from '../components/Newsletter';

const Contact = () => {
  return (
    <div className="pt-10 sm:pt-14 min-h-[80vh] bg-gradient-to-r  to-gold-100">
      {/* Contact Us Title */}
      <div className="text-2xl text-center mb-10 border-t pt-8">
        <Title text1={"CONTACT"} text2={"BOOK HAVEN"} />
      </div>

      {/* Contact Information */}
      <div className="my-10 flex flex-col sm:flex-row justify-between gap-16 px-6 sm:px-16">
        <img
          className="w-full sm:max-w-[480px] rounded-lg shadow-lg"
          src={image3}
          alt="Book Haven Storefront"
        />
        <div className="flex flex-col justify-center gap-6 sm:w-2/4 text-gray-600">
          <p className="font-semibold text-xl text-gray-800">Visit Our Store</p>
          <p className="text-gray-500">
            📍 123 Book Haven Lane, Literature City, Imagination State, 45678
          </p>
          <p className="text-gray-500">
            Tel: (123) 456-7890 <br />
            Email: contact@bookhaven.com
          </p>
          <p className="font-semibold text-xl text-gray-800">Careers at Book Haven</p>
          <p className="text-gray-500">
            We are always on the lookout for passionate book enthusiasts to join our team. Explore opportunities to turn your love for books into a career.
          </p>
          <button className="border border-black px-8 py-3 text-sm text-black font-medium hover:bg-blue-700 hover:text-white transition-all duration-300">
            Explore Careers
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter/>
    </div>
  );
};

export default Contact;
