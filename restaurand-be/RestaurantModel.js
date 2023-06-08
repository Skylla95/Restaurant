const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    imgUrl: String
}, {
    timestamps: true
});

const restaurantSchema = new mongoose.Schema({
    name: String,
    imgUrl: String,
    openingHour: Number,
    closingHour: Number,
    menu: [menuSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model("Restaurant", restaurantSchema)