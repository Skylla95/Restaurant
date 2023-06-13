import React from "react";
import { useEffect, useState } from "react";
import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/FormatCurrency";
import { CartItem } from "./CartItem";
import OrderTracking from "./OrderTracking";

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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 20000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {isLoading ? (
          <OrderTracking />
        ) : (
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
        )}

        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? "Loading…" : "Order"}
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
