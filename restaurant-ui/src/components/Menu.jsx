import MenuItem from "./MenuItem";

const response = await fetch("http://localhost:8080/items");
const menuItemsList = await response.json();

const Menu = (props) => {
  return (
    <div>
      Ez lesz a {props.restaurantName} menuje
      {menuItemsList.map((item) => {
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
