import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  // Ensure `getCartAmount` is safe and defaults to 0 if undefined or an error occurs
  const cartAmount = typeof getCartAmount === 'function' ? getCartAmount() : 0;

  return (
    <div className="w-full">
      {/* Title Section */}
      <div className="text-2xl">
        <Title text1="CART" text2="TOTALS" />
      </div>

      {/* Totals Section */}
      <div className="flex flex-col gap-2 mt-2 text-sm">
        {/* Subtotal */}
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {cartAmount.toFixed(2)}
          </p>
        </div>
        <hr />

        {/* Delivery Fee */}
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>
            {currency}
            {cartAmount === 0 ? '0.00' : delivery_fee.toFixed(2)}
          </p>
        </div>
        <hr />

        {/* Total */}
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {(cartAmount === 0 ? 0 : cartAmount + delivery_fee).toFixed(2)}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
