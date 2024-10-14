
import React, { useContext, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/layout/Layout';
import Contact from './components/Contact/Contact'; 
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import CounterContextProvider from "./Context/CounterContext";
import { UserContext } from "./Context/UserContext";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Toaster } from "react-hot-toast";
import CartPage from './components/CartPage/CartPage';
import CheckoutPage from "./components/CheckoutPage/CheckoutPage"
export default function App() {
  const { setUserToken } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setUserToken(localStorage.getItem("userToken"));
    }
  }, [setUserToken]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "Contact", element: <Contact /> },
        { path: "Shop", element: <Shop /> },
        { path: "About", element: <About /> },
        { path: "cart-page", element: <CartPage /> },
        { path: "CheckoutPage", element: <CheckoutPage /> },

        { path: "productdetails/:id", element: <ProductDetails /> },
        
      ],
    },
  
    { path: "cart", element: <Cart /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <UserContext.Provider value={{ setUserToken }}>
      <CounterContextProvider>
        <RouterProvider router={routes} />
        <Toaster />
      </CounterContextProvider>
    </UserContext.Provider>
    
  );
}

function NotFound() {
  return <h2>Page not found</h2>;
}

