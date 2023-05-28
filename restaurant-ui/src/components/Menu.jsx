import MenuItem from "./MenuItem";
import items from "../data/items.json";

const Menu = (props) => {
  return (
    <div>
      Ez lesz a {props.restaurantName} menuje
      {items.map((item) => {
        return (
          <div>
            <MenuItem
              id={item.id}
              name={item.name}
              imgUrl={item.imgUrl}
              price={item.price}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Menu;
