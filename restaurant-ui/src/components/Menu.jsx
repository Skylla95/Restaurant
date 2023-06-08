import MenuItem from "./MenuItem";

const Menu = (props) => {
  return (
    <div>
      {props.restaurantMenu.map((item) => {
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
