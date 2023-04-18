import { Schema, model, Types } from "mongoose";

interface IFood {
    _id: string | null;
    // menuId: Types.ObjectId;
    foodName: string;
    price: number;
    foodType: string;
    img: string[];
    rate: number | null
    ingredients: string[];
}

const foodSchema = new Schema<IFood>(
    {
        // menuId: { type: Schema.Types.ObjectId, ref: 'Menus' },
        foodName: String,
        price: Number,
        foodType: { type: String, enum: ['soup', 'mainCourse', 'dessert', 'setFood', 'traditionalFood', 'other'] },
        img: [String],
        rate: Number,
        ingredients: [String]
    },
    {
        collection: 'foods',
        timestamps: true
    }
)

const Foods = model<IFood>('Foods', foodSchema);
export default Foods
