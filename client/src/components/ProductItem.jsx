import { ShopContext } from '@/context/ShopContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, title, price, ratings, func }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div className="text-gray-700 cursor-pointer" onClick={func}>
      <div className="overflow-hidden w-full h-64 flex justify-center items-center bg-gray-100">
        <img
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          src={image}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{title}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
      <p className="text-sm font-medium text-orange-600" >{ratings}</p>
    </div>
  );
};

export default ProductItem;
