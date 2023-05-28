import Restaurant from "./Restaurant";
import getRestaurants from "./getRestaurants";
import styles from "../styles/PizzaList.module.css";

const data = getRestaurants().slice(0, 100);

const Restaurants = () => {
  return (
    <div className={styles.container}>
      {data.map((restaurant) => {
        if (
          new Date().getHours() >= restaurant.openingHour &&
          new Date().getHours() < restaurant.closingHour
        )
          return (
            <div className={styles.wrapper}>
              <Restaurant
                restaurantName={restaurant.name}
                restaurantImage={restaurant.imageSource}
              />
            </div>
          );
        else return null;
      })}
    </div>
  );
};
export default Restaurants;
