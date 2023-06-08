import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/FormatCurrency";

const MenuItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <img src={imgUrl} width={50} height={50} alt={name}></img>
        <span className="ms-2 text-muted"> {formatCurrency(price)}</span>
        {quantity === 0 ? (
          <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
            + Add To Cart
          </Button>
        ) : (
          <div
            className="d-flex align-items-center flex-row"
            style={{ gap: ".5rem" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: ".5rem" }}
            >
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <div>
                <span className="fs-3">{quantity}</span> in cart
              </div>
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            <Button
              onClick={() => removeFromCart(id)}
              variant="danger"
              size="sm"
            >
              Remove
            </Button>
          </div>
        )}
      </Card.Title>
    </Card.Body>
  );
};
export default MenuItem;
