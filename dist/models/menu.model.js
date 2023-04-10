"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const menuSchema = new mongoose_1.Schema({
    restaurantId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Restaurants" }],
    food: [
        {
            foodName: String,
            img: [String],
            price: Number,
            foodType: {
                type: String,
                enum: [
                    "soup",
                    "mainCourse",
                    "fastFood",
                    "dessert",
                    "setFood",
                    "traditionalFood",
                    "other",
                ],
            },
            commentId: [
                { type: mongoose_1.Schema.Types.ObjectId, ref: "Comments", required: false },
            ],
            ingredients: [String],
        },
    ],
    beverages: [
        {
            beverageName: String,
            img: [String],
            price: Number,
            beveragesType: { type: String, enum: ["Coffee", "Achohol"] },
            commentId: [
                { type: mongoose_1.Schema.Types.ObjectId, ref: "Comments", required: false },
            ],
            ingredients: [{ type: String, required: false }],
        },
    ],
}, {
    timestamps: true,
});
const Menu = (0, mongoose_1.model)("Menus", menuSchema);
exports.default = Menu;
