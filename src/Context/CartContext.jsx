import axios from "axios";
import { createContext, useState, useEffect } from "react";

export let CartContext = createContext();

export default function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  async function getCartItems() {
    try {
      const response = await axios.get("https://fakestoreapi.com/carts/1"); 
      const cartData = response.data.products.map(async (product) => {
        const productDetails = await axios.get(`https://fakestoreapi.com/products/${product.productId}`);
        return { ...productDetails.data, quantity: product.quantity };
      });
      const resolvedCartItems = await Promise.all(cartData);
      setCartItems(resolvedCartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }

  async function addToCart(productId) {
    try {
      const response = await axios.post("https://fakestoreapi.com/carts", { productId });
      const productDetails = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setCartItems((prevItems) => [...prevItems, { ...productDetails.data, quantity: 1 }]);
      console.log("Added to cart:", response.data);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  }

  function removeFromCart(productId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  }

  function updateCartQuantity(productId, quantity) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  }

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItems, getCartItems, addToCart, removeFromCart, updateCartQuantity }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
