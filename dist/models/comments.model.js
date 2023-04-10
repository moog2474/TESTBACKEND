"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    restaurantId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Restaurants" },
    foodId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Menu" },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Users" },
    comment: String,
    rate: Number,
}, {
    timestamps: true,
});
const Comments = (0, mongoose_1.model)("Comments", commentSchema);
exports.default = Comments;
