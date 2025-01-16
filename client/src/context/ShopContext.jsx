import { createContext, useEffect, useState } from "react";
import { products } from "@/assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, format) => {

        if (!format) {
            toast.error('Select Product Size')
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][format]) {
                cartData[itemId][format] += 1;
            }
            else {
                cartData[itemId][format] = 1;
            }
        }
            else {
                cartData[itemId] = {};
                cartData[itemId][format] = 1;
            }
            setCartItems(cartData);
    }

     const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems) {
            for (const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                     
                }
            }
        }
        return totalCount;
     };

     const getCartAmount = () => {
        let totalAmount = 0;
      
        for (const itemId in cartItems) {
          const itemInfo = products.find((product) => product.id === parseInt(itemId));
          if (itemInfo) {
            totalAmount += itemInfo.price * cartItems[itemId];
          }
        }
      
        return totalAmount;
      };

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, addToCart, getCartCount, getCartAmount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;