"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const menuSchema = new mongoose_1.Schema({
    restaurantId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Restaurants" },
    foodId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Foods' }],
    beverageId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Beverages' }]
}, {
    collection: "menus",
    timestamps: true,
});
const Menu = (0, mongoose_1.model)("Menus", menuSchema);
exports.default = Menu;
