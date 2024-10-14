import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import styles from "./CartModal.module.css";
import { useNavigate } from "react-router-dom";
export default function CartModal({ show, onClose }) {
  const { cartItems, removeFromCart, updateCartQuantity } = useContext(CartContext);



  const navigate = useNavigate();

  if (!show) {
    return null;
  }

  const goToCartPage = () => {
    onClose();
    navigate("/cart-page"); 
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>Shopping Cart</h2>
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
            </div>
          ))
        ) : (
          <p>No products in cart</p>
        )}
        <hr />
        <p>Subtotal: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} EGP</p>
        <div className={styles.cartButtons}>
        <button onClick={goToCartPage} style={{ background: "#B88E2F" }} className="btn btn-outline-dark">Cart</button>
          <button style={{ background: "#B88E2F" }}className="btn btn-outline-dark">Checkout</button>
          <button style={{ background: "#B88E2F" }}className="btn btn-outline-dark">Comparison</button>
        </div>
      </div>
    </div>
  );
}
