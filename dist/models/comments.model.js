"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    restaurantId: { type: mongoose_1.Schema.Types.ObjectId, ref: "restaurants" },
    foodId: { type: mongoose_1.Schema.Types.ObjectId, ref: "menus" },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "users" },
    comment: String,
    rate: Number,
}, {
    collection: 'comments',
    timestamps: true,
});
const Comments = (0, mongoose_1.model)("Comments", commentSchema);
exports.default = Comments;
