import React, { useState } from 'react';
import CartTotal from '../components/CartTotal';
import Title from '../components/Title';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';
import { useContext } from 'react';
import { ShopContext } from '@/context/ShopContext';

const PlaceOrder = () => {
  const { products, placeOrder } = useContext(ShopContext);
  const [method, setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);

  const handlePlaceOrder = () => {
  
    // Place the order with the selected product IDs
    placeOrder();
  
    // Navigate to the orders page
    navigate('/orders');
  };
  
  

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 px-8 lg:px-20 py-12">
        {/* Left Section: Delivery Information */}
        <div className="w-full">
          <div className="mb-8">
            <Title text1="DELIVERY" text2="INFORMATION" />
          </div>

          {/* Form Section */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name and Last Name */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="border rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="border rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Email */}
            <div className="col-span-2 flex flex-col">
              <label className="text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                placeholder="example@example.com"
                className="border rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Home Address */}
            <div className="col-span-2 flex flex-col">
              <label className="text-sm font-semibold mb-2">Home Address</label>
              <input
                type="text"
                placeholder="1234 Elm Street"
                className="border rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* City and State */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">City</label>
              <input
                type="text"
                placeholder="City"
                className="border rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">State</label>
              <input
                type="text"
                placeholder="State"
                className="border rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Zip Code and Country */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Zip Code</label>
              <input
                type="text"
                placeholder="00000"
                className="border rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Country</label>
              <input
                type="text"
                placeholder="Country"
                className="border rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Phone */}
            <div className="col-span-2 flex flex-col">
              <label className="text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 234 567 890"
                className="border rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </form>
        </div>

        {/* Right Section: Cart Summary & Payment Method */}
        <div className="w-full bg-gray-50 shadow-md rounded-md p-8">
          {/* Cart Total */}
          <div>
            <CartTotal />
          </div>

          {/* Payment Method */}
          <div className="mt-10">
            <Title text1="PAYMENT" text2="METHOD" />
            <div className="flex flex-col gap-4 mt-6">
              {/* Visa */}
              <div
                onClick={() => setMethod('visa')}
                className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-all ${
                  method === 'visa' ? 'bg-blue-50 border-blue-500' : 'border-gray-300'
                }`}
              >
                <img src={visa} alt="Visa" className="h-10" />
                <p className="font-medium">Visa</p>
              </div>

              {/* Mastercard */}
              <div
                onClick={() => setMethod('mastercard')}
                className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-all ${
                  method === 'mastercard' ? 'bg-blue-50 border-blue-500' : 'border-gray-300'
                }`}
              >
                <img src={mastercard} alt="Mastercard" className="h-10" />
                <p className="font-medium">Mastercard</p>
              </div>

              {/* Cash on Delivery */}
              <div
                onClick={() => setMethod('cod')}
                className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-all ${
                  method === 'cod' ? 'bg-blue-50 border-blue-500' : 'border-gray-300'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 ${
                    method === 'cod' ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                  }`}
                />
                <p className="font-medium">Cash on Delivery</p>
              </div>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handlePlaceOrder} className="bg-gray-800 text-white py-3 px-6 rounded-lg text-lg font-medium transition-transform hover:scale-105 hover:bg-gray-900"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
