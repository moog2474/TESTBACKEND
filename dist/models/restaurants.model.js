"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const restaurantsSchema = new mongoose_1.Schema({
    restaurantName: String,
    address: {
        district: String,
        street: String,
        building: String,
        address: String,
        location: {
            type: { type: String, enum: ["Point"] },
            coordinates: [Number],
        },
    },
    restaurantRate: [
        {
            rateType: {
                type: String,
                enum: ["foodRate", "serviceRate", "parkingRate", "interierDesign"],
            },
            userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "users" },
            score: Number,
            comment: String,
        },
    ],
    cuisineType: [String],
    // foodType: [String],
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
    img: [String],
    logoImg: { type: String, required: false },
    schedule: {
        weekday: { open: Number, close: Number },
        weekend: { open: Number, close: Number },
    },
}, {
    collection: "restaurants",
    timestamps: true,
});
const Restaurants = (0, mongoose_1.model)("Restaurants", restaurantsSchema);
exports.default = Restaurants;
// interface IRestaurant {
//   restaurantName: string;
//   address: [
//     {
//       district: string;
//       street: string;
//       building: string;
//       address: string;
//       location: {
//         type: string;
//         coordinates: number[];
//       };
//     }
//   ];
//   restaurantRate: {
//     foodRate: [
//       {
//         userId: string;
//         score: number;
//         comment: string;
//       }
//     ];
//     serviceRate: [
//       {
//         userId: string;
//         score: number;
//         comment: string;
//       }
//     ];
//     parkingRate: [
//       {
//         userId: string;
//         score: number;
//         comment: string;
//       }
//     ];
//     interierDesign: [
//       {
//         userId: string;
//         score: number;
//         comment: string;
//       }
//     ];
//   };
//   cuisineType: string[]; // national
//   foodType: string[]; //Ene hereg baina uu? Menu dotroo foodtype beverageType tai ym chin?
//   menuId: Types.ObjectId;
//   contact: {
//     phone: number;
//     facebook: string;
//     Instagram: string;
//     link: string;
//   };
//   email: string;
//   img: string[];
//   schedule: {
//     weekday: { open: number; close: number };
//     weekend: { open: number; close: number };
//   };
// }
