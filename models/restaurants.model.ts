import { Schema, model, Types } from "mongoose";

interface IRestaurant {
  restaurantName: string;
  address: {
    district: string;
    street: string;
    building: string;
    address: string;
    location: {
      type: string;
      coordinates: number[];
    };
  };
  restaurantRate: [
    {
      rateType: string;
      userId: Types.ObjectId;
      score: number;
      comment: string;
    }
  ];
  cuisineType: string[]; // national
  // foodType: string[]; //Ene hereg baina uu? Menu dotroo foodtype beverageType tai ym chin?
  contact: {
    phone: number;
    facebook: string;
    Instagram: string;
    link: string;
  };
  email: string;
  img: string[];
  logoImg: string | null;
  schedule: {
    weekday: { open: number; close: number };
    weekend: { open: number; close: number };
  };
}

const restaurantsSchema = new Schema<IRestaurant>(
  {
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
        userId: { type: Schema.Types.ObjectId, ref: "users" },
        score: Number,
        comment: String,
      },
    ],
    cuisineType: [String], // national
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
  },
  {
    collection: "restaurants",
    timestamps: true,
  }
);

const Restaurants = model<IRestaurant>("Restaurants", restaurantsSchema);

export default Restaurants;

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
