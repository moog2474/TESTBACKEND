"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: String,
    userName: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: String,
    point: [Number],
    userType: {
        type: String,
        enum: ["Admin", "User"],
        default: "User",
    },
    img: [],
    commentId: [
        { type: mongoose_1.Schema.Types.ObjectId, ref: "Comments", required: false },
    ],
    // lastLoginDate: Date,
}, {
    collection: "Users",
    timestamps: true,
});
const Users = (0, mongoose_1.model)("Users", userSchema);
exports.default = Users;
