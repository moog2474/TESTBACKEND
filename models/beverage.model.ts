import { Schema, model, Types } from "mongoose";

interface IBeverage {
    _id: string | null;
    // menuId: Types.ObjectId;
    beverageName: string;
    price: number;
    beverageType: string;
    img: string[];
}

const beverageSchema = new Schema<IBeverage>(
    {
        // menuId: { type: Schema.Types.ObjectId, ref: "Menus" },
        beverageName: String,
        price: Number,
        beverageType: { type: String, enum: ['alchohol', 'juice', 'tea', 'cocktail'] },
        img: [String]
    },
    {
        collection: 'beverages',
        timestamps: true
    }
)

const Beverages = model<IBeverage>('Beverages', beverageSchema);
export default Beverages