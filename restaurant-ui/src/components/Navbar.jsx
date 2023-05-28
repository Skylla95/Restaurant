import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useShoppingCart } from "../context/ShoppingCartContext";

function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <img
            src="https://icon-library.com/images/telephone-icon-vector-free-download/telephone-icon-vector-free-download-13.jpg"
            alt=""
            width="80"
            height="80"
            style={{
              position: "absolute",
              top: "3px",
              left: "30px",
            }}
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li>
            <NavLink to="/" className={styles.listItem}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/restaurants" className={styles.listItem}>
              Restaurants
            </NavLink>
          </li>
          <img
            src="data:image/png;base64,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"
            alt=""
            width="190px"
            height="100px"
          />
          <li>
            <NavLink to="/contact" className={styles.listItem}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" className={styles.listItem}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <img
          src="https://icons.veryicon.com/png/o/application/wq/shopping-cart-35.png"
          alt=""
          width="80px"
          height="80px"
          onClick={openCart}
        />

        <div
          className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
          style={{
            color: "white",
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            bottom: 20,
            right: 50,
            transform: "translate(25%, 25%)",
          }}
        >
          {cartQuantity}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
