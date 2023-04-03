import {Schema, model, Types} from "mongoose"

interface IRestaurant {
    restaurantName: string,
    address: [
      {
        district: string,
        street: string,
        building: string,
        address: string,
        location: {
          type: string,
          coordinates: number[],
        },
      },
    ],
    restaurantRate: {
      foodRate: [
        {
          userId: string,
          score: number,
          comment: string,
        },
      ],
      serviceRate: [
        {
          userId: string,
          score: number,
          comment: string,
        },
      ],
      parkingRate: [
        {
          userId: string,
          score: number,
          comment: string,
        },
      ],
      interierDesign: [
        {
          userId: string,
          score: number,
          comment: string,
        },
      ],
    },
    cuisineType: string[], // national
    foodType: string[],
    menuId: string,
    contact: {
      phone: number,
      facebook: string,
      Instagram: string,
      link: string,
    },
    email: string,
    img: string[],
    schedule: {
      weekday: { open: number, close: number },
      weekend: { open: number, close: number },
    }
  }

const restaurantsSchema = new Schema<IRestaurant>(
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

const Restaurants = model<IRestaurant>("Restaurants", restaurantsSchema);

export default  Restaurants;
