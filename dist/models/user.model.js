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
    // lastLoginDate: Date,
}, {
    collection: "users",
    timestamps: true,
});
const Users = (0, mongoose_1.model)("Users", userSchema);
exports.default = Users;
