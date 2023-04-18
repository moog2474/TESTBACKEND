"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const foodSchema = new mongoose_1.Schema({
    menuId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Menus' },
    foodName: String,
    price: Number,
    foodType: { type: String, enum: ['soup', 'mainCourse', 'dessert', 'setFood', 'traditionalFood', 'other'] },
    img: [String],
    ingredients: [String]
}, {
    collection: 'foods',
    timestamps: true
});
const Foods = (0, mongoose_1.model)('Foods', foodSchema);
exports.default = Foods;
