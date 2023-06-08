import React, { useState } from "react";
import Menu from "./Menu";
import { Card } from "react-bootstrap";

const Restaurant = (props) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  return (
    <Card>
      <Card.Img
        variant="top"
        src={props.restaurantImage}
        height="200px"
        style={{ objectFit: "cover" }}
        onClick={toggle}
        display={props.restaurantClosed}
      />
      {open && (
        <Menu
          restaurantName={props.restaurantName}
          restaurantMenu={props.restaurantMenu}
        />
      )}
    </Card>
  );
};
export default Restaurant;
