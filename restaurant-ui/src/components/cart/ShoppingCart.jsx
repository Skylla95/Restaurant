import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/FormatCurrency";
import { CartItem } from "./CartItem";

const restaurants = await fetch("http://localhost:8080/restaurants");
const restaurantsList = await restaurants.json();

var menus = restaurantsList.map((restaurants) => restaurants.menu);
var menu = menus[0];
for (let i = 1; i < menus.length; i++) {
  menu = menu.concat(menus[i]);
}
console.log(menu);

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Order{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = menu.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
            <br />
            Shipping{" "}
            {cartItems.reduce((total, cartItem) => {
              const item = menu.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0) < 50
              ? "10$"
              : "free"}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
