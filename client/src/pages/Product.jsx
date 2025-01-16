import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Star from "../assets/Star.png";
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [format, setFormat] = useState("Hardcover"); // New state for book format

  const fetchProductData = () => {
    const product = products.find((item) => item.id === Number(productId));
    if (product) {
      setProductData(product);
      setImageUrl(
        Array.isArray(product.image) ? product.image[0] : product.image
      ); // Set the initial image
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  if (!productData) return <div>Loading...</div>;

  return (
    <div className="bg-white text-black border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 font-sans">
      {/* Product Data */}
      <div className="container mx-auto flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {Array.isArray(productData.imageUrl) &&
              productData.imageUrl.map((item, index) => (
                <img
                  onClick={() => setImageUrl(item)}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                  alt={`Thumbnail ${index + 1}`}
                />
              ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto rounded-md shadow-lg"
              src={imageUrl}
              alt={productData.title}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-light text-3xl mt-2 tracking-wide">{productData.title}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <img src={Star} alt={`Star ${i + 1}`} key={i} className="w-3.5" />
            ))}
            <p className="pl-2 text-sm font-light">(122)</p>
          </div>
          <p className="mt-5 text-2xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-600 text-sm md:w-4/5 leading-relaxed">
            {productData.description}
          </p>

          {/* Format Selection */}
          <div className="flex gap-4 mt-5">
            <button
              onClick={() => setFormat("Hardcover")}
              className={`px-6 py-2 text-sm rounded-md border ${
                format === "Hardcover"
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-400"
              } transition-all`}
            >
              Hardcover
            </button>
            <button
              onClick={() => setFormat("Paperback")}
              className={`px-6 py-2 text-sm rounded-md border ${
                format === "Paperback"
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-400"
              } transition-all`}
            >
              Paperback
            </button>
          </div>

          <button
            onClick={() => addToCart(productData.id, format)}
            className="bg-black text-white px-8 py-3 text-sm mt-6 tracking-wide rounded-md hover:bg-gray-900 transition-all"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 border-gray-300" />
          <div className="text-sm text-gray-600 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Product Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm bg-gray-100">Description</b>
          <p className="border px-5 py-3 text-sm bg-white">Reviews</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600 leading-relaxed">
          <p>
            An e-commerce website is a digital platform enabling businesses to
            sell products or services online. It features user-friendly
            navigation, product listings with detailed descriptions, secure
            payment options, and a seamless checkout process. Customers can
            browse, compare, and purchase items anytime, enhancing convenience
            and accessibility for shopping from anywhere in the world.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 bg-black text-white py-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2025 Your Store. All rights reserved.</p>
          <ul className="flex gap-4 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </footer>

      <RelatedProducts category={productData.category} />
    </div>
  );
};

export default Product;
