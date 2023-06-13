import Carousel from "react-bootstrap/Carousel";

function OrderTracking() {
  return (
    <Carousel controls={false} touch={false}>
      <Carousel.Item interval={10000}>
        <video width="250" height="166" controls={false} autoPlay={true}>
          <source src="./Videos/video1.mp4" type="video/mp4" />
        </video>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="./img/delivery.png"
          alt="delivering"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="./img/arrived.png"
          alt="food arrived"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default OrderTracking;
