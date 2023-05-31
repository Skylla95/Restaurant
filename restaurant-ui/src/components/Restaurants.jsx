import Restaurant from "./Restaurant";
import styles from "../styles/PizzaList.module.css";

const response = await fetch("http://localhost:8080/restaurants");
const restaurantsList = await response.json();

const Restaurants = () => {
  return (
    <div className={styles.container}>
      {restaurantsList.map((restaurant) => {
        if (
          new Date().getHours() >= restaurant.openingHour &&
          new Date().getHours() < restaurant.closingHour
        )
          return (
            <div className={styles.wrapper}>
              <Restaurant
                restaurantName={restaurant.name}
                restaurantImage={restaurant.imgUrl}
              />
            </div>
          );
        else return null;
      })}
    </div>
  );
};
export default Restaurants;
