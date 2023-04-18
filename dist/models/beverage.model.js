"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const beverageSchema = new mongoose_1.Schema({
    menuId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Menus" },
    beverageName: String,
    price: Number,
    beverageType: { type: String, enum: ['alchohol', 'juice', 'tea', 'cocktail'] },
    img: [String]
}, {
    collection: 'beverages',
    timestamps: true
});
const Beverages = (0, mongoose_1.model)('Beverages', beverageSchema);
exports.default = Beverages;
