import { createContext, useEffect, useState } from "react";
import { products } from "@/assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₦";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [orderedProducts, setOrderedProducts] = useState([]);
  const navigate = useNavigate();

  const addToCart = async (itemId, format) => {
    if (!format) {
      toast.error("Select Product Size");
      return; // Exit early if format is not selected
    }

    let cartData = JSON.parse(JSON.stringify(cartItems));

    if (cartData[itemId]) {
      if (cartData[itemId][format]) {
        cartData[itemId][format] += 1;
      } else {
        cartData[itemId][format] = 1;
      }
    } else {
      cartData[itemId] = { [format]: 1 };
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const product = products.find((product) => product.id === parseInt(itemId));
      if (product) {
        for (const format in cartItems[itemId]) {
          totalAmount += product.price * cartItems[itemId][format];
        }
      }
    }

    return totalAmount;
  };

    const updateQuantity = async (itemId, format, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][format] = quantity
        setCartItems(cartData);
    }

    const placeOrder = () => {
        // Extract product IDs from the cartItems object
        const productIds = Object.keys(cartItems).map((id) => parseInt(id));
      
        // Find the corresponding products from the products array
        const selectedProducts = productIds.map((productId) => {
          const product = products.find((item) => item.id === productId);
      
          if (product) {
            // Include formats and quantities for each ordered product
            return {
              ...product,
              formats: cartItems[productId],
            };
          }
      
          return null;
        }).filter((product) => product !== null); // Filter out any invalid entries
      
        // Update the orderedProducts state
        setOrderedProducts((prev) => [...prev, ...selectedProducts]);
      
        // Clear the cart after placing the order
        setCartItems({});
      
        // Navigate to the orders page
        navigate('/orders');
      };
      



  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    getCartCount,
    getCartAmount,
    cartItems,
    setCartItems,
    updateQuantity,
    navigate,
    placeOrder,
    orderedProducts
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
