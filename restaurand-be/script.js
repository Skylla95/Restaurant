const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const itemsList = require("./data/items.json")
const restaurantsList = require("./data/restaurants.json")
const Restaurant = require("./RestaurantModel")
const Menu = require("./MenuModel")
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://norbivitus:GnEVoVydOuI8k6M7@cluster0.on4klzg.mongodb.net/")

async function getRestaurants() {

    const restaurant = await Restaurant.find({})
    console.log(json(restaurant))
    return json(restaurant);
    // await restaurant.save()
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/items', (request, response) => {
    Menu.find()
        .then(data => response.json(data))
        .catch(error => response.json(error))
});

app.get('/restaurants', (request, response) => {
    Restaurant.find()
        .then(data => response.json(data))
        .catch(error => response.json(error))
});

app.listen(8080, () =>
    console.log("API is running on http://localhost:8080/")
);