const { strict } = require("assert");
const { default: mongoose, Schema } = require("mongoose");

const restaurantsSchema = new mongoose.Schema(
  {
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
          userId: [{ type: Schema.Types.ObjectId, ref: "Users" }],
          score: Number,
          comment: String,
        },
      ],
      serviceRate: [
        {
          userId: [{ type: Schema.Types.ObjectId, ref: "Users" }],
          score: Number,
          comment: String,
        },
      ],
      parkingRate: [
        {
          userId: [{ type: Schema.Types.ObjectId, ref: "Users" }],
          score: Number,
          comment: String,
        },
      ],
      interierDesign: [
        {
          userId: [{ type: Schema.Types.ObjectId, ref: "Users" }],
          score: Number,
          comment: String,
        },
      ],
    },
    cuisineType: [String], // national
    foodType: [],
    menuId: [{ type: Schema.Types.ObjectId, ref: "Menu" }],
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
  },
  {
    collection: "Restaurants",
    timestamps: true,
  }
);

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

module.exports = Restaurants;
