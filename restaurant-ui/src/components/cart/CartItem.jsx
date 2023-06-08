import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/FormatCurrency";

const restaurants = await fetch("http://localhost:8080/restaurants");
const restaurantsList = await restaurants.json();

var menus = restaurantsList.map((restaurants) => restaurants.menu);
var menu = menus[0];
for (let i = 1; i < menus.length; i++) {
  menu = menu.concat(menus[i]);
}
console.log(menu);

export function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();
  const item = menu.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt="sajt"
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
export default CartItem;
