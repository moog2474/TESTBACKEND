import { Schema, model, Types } from "mongoose";

interface IMenu {
  _id: string;
  restaurantId: Types.ObjectId;
  food: [
    {
      foodName: string;
      img: string[];
      price: number;
      foodType: string; // enum [soup, beverage, setFood]
      commentId: Types.ObjectId | null;
      ingredients: string[];
    }
  ];
  beverages: [
    {
      beverageName: string;
      img: string[];
      price: number;
      beveragesType: string; // enum [soup beverage, setFood]
      commentId: Types.ObjectId | null;
      ingredients: string[] | null;
    }
  ];
}

const menuSchema = new Schema<IMenu>(
  {
    restaurantId: [{ type: Schema.Types.ObjectId, ref: "Restaurants" }],
    food: [
      {
        foodName: String,
        img: [String],
        price: Number,
        foodType: {
          type: String,
          enum: [
            "soup",
            "mainCourse",
            "fastFood",
            "dessert",
            "setFood",
            "traditionalFood",
            "other",
          ],
        },
        commentId: [
          { type: Schema.Types.ObjectId, ref: "Comments", required: false },
        ],
        ingredients: [String],
      },
    ],
    beverages: [
      {
        beverageName: String,
        img: [String],
        price: Number,
        beveragesType: { type: String, enum: ["Coffee", "Achohol"] },
        commentId: [
          { type: Schema.Types.ObjectId, ref: "Comments", required: false },
        ],
        ingredients: [{ type: String, required: false }],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Menu = model<IMenu>("Menus", menuSchema);

export default Menu;
