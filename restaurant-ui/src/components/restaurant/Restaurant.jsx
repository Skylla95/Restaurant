import React, { useState } from "react";
import Menu from "./Menu";
import { Card, Offcanvas } from "react-bootstrap";

const Restaurant = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={props.restaurantImage}
        height="200px"
        style={{ objectFit: "cover" }}
        onClick={handleShow}
      />
      <Offcanvas
        className="offcanvas offcanvas-top"
        show={show}
        onHide={handleClose}
        style={{ height: "80vh", width: "80vw", top: "10vh", left: "10vw" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.restaurantName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Menu restaurantMenu={props.restaurantMenu} />
        </Offcanvas.Body>
      </Offcanvas>
    </Card>
  );
};
export default Restaurant;
