import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Order = () => {
  const { orderedProducts, currency } = useContext(ShopContext);

  return (
    <div className=" pt-16 bg-gradient-to-r  min-h-screen">
      <div className="text-2xl font-semibold text-gray-700 mb-8">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {/* Check if there are no orders */}
      {orderedProducts.length === 0 ? (
        <p className="text-gray-500 text-center">You have no orders yet.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {orderedProducts.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all transform hover:scale-105"
            >
              {/* Product Info */}
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20 rounded-lg object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex flex-col">
                  <p className="text-base sm:text-lg font-medium text-gray-800">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-gray-700">
                    <p className="text-lg font-semibold">
                      {currency}
                      {item.price}
                    </p>
                    <p className="text-sm">Quantity: 1</p>
                    <p className='text-sm'>Format: Hardcover</p>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Ordered on: <span className="font-medium">14, Jan 2025</span>
                  </p>
                </div>
              </div>

              {/* Order Status & Actions */}
              <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-6 w-full md:w-auto">
                {/* Status */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <p className="text-sm md:text-base text-gray-700">
                    Ready for Delivery
                  </p>
                </div>

                {/* Track Button */}
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 transition-all">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
