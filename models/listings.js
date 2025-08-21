const mongoose = require("mongoose");
const { Schema } = mongoose;

const listingSchema = new Schema({
    title: {
        type: String,
        // required: true, // you can uncomment if title should be mandatory
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
        set: v => v === "" ? "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
