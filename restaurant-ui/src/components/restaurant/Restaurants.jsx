import Restaurant from "./Restaurant";

const response = await fetch("http://localhost:8080/restaurants");
const restaurantsList = await response.json();

const Restaurants = () => {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {restaurantsList.map((restaurant) => {
        if (
          new Date().getHours() >= restaurant.openingHour &&
          new Date().getHours() < restaurant.closingHour
        )
          return (
            <Restaurant
              restaurantName={restaurant.name}
              restaurantImage={restaurant.imgUrl}
              restaurantMenu={restaurant.menu}
            />
          );
        else return null;
      })}
    </div>
  );
};
export default Restaurants;
