import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import styles from "./CartPage.module.css";

import logo1 from "../../Assets/images/Group 78.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faShieldAlt, faTruck, faHeadset } from '@fortawesome/free-solid-svg-icons';

export default function CartPage() {
  const { cartItems, removeFromCart, updateCartQuantity } = useContext(CartContext);

  return (
    <div className={styles.cartPage}>
      
      <div className={styles.header}>
        <img src={logo1} alt="Meubel House Logo" className={styles.logoImage1} />
        </div>
    
        <nav className={styles.navbar}>
    
        <div className={styles.menu}>
          <a href="">Product</a>
          <a href="">Price</a>
          <a href="">Quantity</a>
          <a href="">Subtotal</a>
        </div>
      </nav>
      <div className={styles.cartContent}>
        <h2>Cart</h2>
        <div className={styles.cartItems}>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className={styles.cartItem}>
                <img src={item.image} alt={item.title} className={styles.cartItemImage} />
                <div className={styles.cartItemDetails}>
                  <h3>{item.title}</h3>
                  <p>{item.price} EGP</p>
                  <div className={styles.quantityControls}>
                    <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>X</button>
                </div>
                <p className={styles.subtotal}>{item.price * item.quantity} EGP</p>
              </div>
            ))
          ) : (
            <p>No products in cart</p>
          )}
        </div>
        <div className={styles.cartTotals}>
          <h3>Cart Totals</h3>
          <p>Subtotal: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} EGP</p>
          <p>Total: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} EGP</p>
          <button className={styles.checkoutButton} onClick={() => window.location.href='/CheckoutPage'}>Check Out</button>


        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.featureItem}>
          <FontAwesomeIcon icon={faTrophy} className={styles.icon} />
          <h4>High Quality</h4>
          <p>crafted from top materials</p>
        </div>
        <div className={styles.featureItem}>
          <FontAwesomeIcon icon={faShieldAlt} className={styles.icon} />
          <h4>Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div className={styles.featureItem}>
          <FontAwesomeIcon icon={faTruck} className={styles.icon} />
          <h4>Free Shipping</h4>
          <p>on orders over 150 EGP</p>
        </div>
        <div className={styles.featureItem}>
          <FontAwesomeIcon icon={faHeadset} className={styles.icon} />
          <h4>24/7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  );
}
