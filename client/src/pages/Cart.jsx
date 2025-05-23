import { assets } from '@/assets/assets';
import CartTotal from '@/components/CartTotal';
import Title from '@/components/Title';
import { ShopContext } from '@/context/ShopContext';
import React, { useContext, useEffect, useState } from 'react';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  // Transform cartItems into cartData with useEffect
  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const format in cartItems[itemId]) {
        if (cartItems[itemId][format] > 0) {
          tempData.push({
            id: parseInt(itemId), // Ensure id is a number for matching with products
            format: format,
            quantity: cartItems[itemId][format],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14 px-4 sm:px-10 lg:px-20">
      {/* Title Section */}
      <div className="text-2xl mb-6">
        <Title text1="YOUR" text2="CART" />
      </div>

      {/* Cart Items Section */}
      <div className="space-y-6">
        {cartData.map((item, index) => {
          // Find product details by matching id
          const productData = products.find((product) => product.id === item.id);

          // Safeguard: Only render if productData exists
          if (!productData) {
            return null;
          }

          return (
            <div
              key={index}
              className="py-4 px-4 sm:px-6 bg-gray-50 rounded-lg shadow-md flex items-center gap-6 sm:gap-8"
            >
              {/* Product Image */}
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                src={productData.image[0]} // Assuming `image` is an array
                alt={productData.title}
              />

              {/* Product Details */}
              <div className="flex-1">
                <p className="text-sm sm:text-lg font-semibold text-gray-800">{productData.title}</p>
                <p className="text-xs sm:text-sm text-gray-600">Format: {item.format}</p>
              </div>

              {/* Quantity Input */}
              <input
                onChange={(e) => {
                  const value = e.target.value;

                  // Prevent calling updateQuantity for invalid inputs
                  if (value === '' || value === '0') {
                    return;
                  }

                  // Call updateQuantity with a valid number
                  updateQuantity(item.id, item.format, Number(value));
                }}
                className="w-12 sm:w-16 border text-center py-1 rounded-md"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />

              {/* Delete Icon */}
              <img
                onClick={() => updateQuantity(item.id, item.format, 0)}
                className="w-5 sm:w-6 cursor-pointer hover:opacity-70"
                src={assets.bin_icon}
                alt="Delete Item"
              />

              {/* Total Price */}
              <p className="text-sm sm:text-lg font-medium text-gray-800">
                {currency}
                {(productData.price * item.quantity).toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>

      {/* Cart Total and Checkout Section */}
      <div className="flex justify-end mt-10">
        <div className="w-full sm:w-[450px] bg-white p-6 rounded-lg shadow-lg">
          <CartTotal />
          <div className="text-right mt-4">
            <button onClick={()=> navigate('/place-order')} className="bg-black text-white text-sm sm:text-base px-8 py-3 rounded-lg hover:bg-gray-800 transition">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
