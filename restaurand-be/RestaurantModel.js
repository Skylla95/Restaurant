const mongoose = require("mongoose")

const restaurantSchema = new mongoose.Schema({
    name: String,
    imgUrl: String,
    openingHour: Number,
    closingHour: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model("Restaurant", restaurantSchema)