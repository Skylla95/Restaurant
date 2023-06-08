import MenuItem from "./MenuItem";
import { Card } from "react-bootstrap";

const Menu = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {props.restaurantMenu.map((item) => {
        return (
          <Card style={{ width: "16rem" }} className="d-block">
            <MenuItem
              id={item.id}
              name={item.name}
              imgUrl={item.imgUrl}
              price={item.price}
            />
          </Card>
        );
      })}
    </div>
  );
};
export default Menu;
