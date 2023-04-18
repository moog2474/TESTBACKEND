import { Schema, model, Types } from "mongoose";

interface IMenu {
  _id: string;
  restaurantId: Types.ObjectId;
  foodId: Types.ObjectId;
  beverageId: Types.ObjectId;

}

const menuSchema = new Schema<IMenu>(
  {
    restaurantId: { type: Schema.Types.ObjectId, ref: "Restaurants" },
    foodId: [{ type: Schema.Types.ObjectId, ref: 'Foods' }],
    beverageId: [{ type: Schema.Types.ObjectId, ref: 'Beverages' }]
  },
  {
    collection: "menus",
    timestamps: true,
  }
);

const Menu = model<IMenu>("Menus", menuSchema);

export default Menu;
