import Title from '@/components/Title';
import { ShopContext } from '@/context/ShopContext';
import React, { useContext, useEffect, useState } from 'react';

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
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
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div>
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
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_1fr_1fr] sm:grid-cols-[4fr_2fr_1fr] items-center gap-4"
            >
              {/* Product Image and Details */}
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]} // Assuming `image` is an array
                  alt={productData.title}
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.title}</p>
                  <p className="text-gray-600 text-sm">Format: {item.format}</p>
                </div>
              </div>

              {/* Quantity */}
              <p className="text-center">{item.quantity}</p>

              {/* Total Price */}
              <p className="text-center">
                {currency}
                {(productData.price * item.quantity).toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
