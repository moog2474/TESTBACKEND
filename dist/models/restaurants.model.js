"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const restaurantsSchema = new mongoose_1.Schema({
    restaurantName: String,
    address: [
        {
            district: String,
            street: String,
            building: String,
            address: String,
            location: {
                type: "Point",
                coordinates: [Number],
            },
        },
    ],
    restaurantRate: {
        foodRate: [
            {
                userId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Users" }],
                score: Number,
                comment: String,
            },
        ],
        serviceRate: [
            {
                userId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Users" }],
                score: Number,
                comment: String,
            },
        ],
        parkingRate: [
            {
                userId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Users" }],
                score: Number,
                comment: String,
            },
        ],
        interierDesign: [
            {
                userId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Users" }],
                score: Number,
                comment: String,
            },
        ],
    },
    cuisineType: [String],
    foodType: [],
    menuId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Menu" }],
    contact: {
        phone: Number,
        facebook: String,
        Instagram: String,
        link: String,
    },
    email: {
        type: String,
        unique: true,
    },
    img: [],
    schedule: {
        weekday: { open: Number, close: Number },
        weekend: { open: Number, close: Number },
    },
}, {
    collection: "Restaurants",
    timestamps: true,
});
const Restaurants = (0, mongoose_1.model)("Restaurants", restaurantsSchema);
exports.default = Restaurants;
