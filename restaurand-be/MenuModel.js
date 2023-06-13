const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    imgUrl: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Menu", menuSchema)