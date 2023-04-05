import { Schema, model, Types } from "mongoose";

interface IMenu {
    _id: string;
    restaurantId: Types.ObjectId;
    food: [
        {
            foodName: string;
            img: string[];
            price: number;
            foodTypeId: string; // enum [soup, beverage, setFood]
            commentId: Types.ObjectId;
            ingredients: string[]
        }
    ],
    beverages: [
        {
            beverageName: string;
            img: string[];
            price: number;
            beveragesTypeId: string; // enum [soup beverage, setFood]
            commentId: Types.ObjectId;
            ingredients: string[] | null
        }
    ]
}

const menuSchema = new Schema<IMenu>({

    restaurantId: [{ type: Schema.Types.ObjectId, ref: "Restaurants" }],
    food: [{
        foodName: String,
        img: [String],
        price: Number,
        foodTypeId: { type: String, enum: ['soup', 'mainCourse', 'fastFood', 'dessert', 'setFood', 'traditionalFood', 'other'] },
        commentId: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
        ingredients: [String]
    }],
    beverages: [{
        beverageName: String,
        img: [String],
        price: Number,
        commentId: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
        ingredients: [String]

    }]
})

const Menu = model<IMenu>("Menu", menuSchema);

export default Menu;