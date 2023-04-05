import { Schema, model, Types } from "mongoose";

interface IComment {
    _id: string;
    restaurantId: Types.ObjectId;
    foodId: Types.ObjectId | null;
    userId: Types.ObjectId;
    comment: string | null;
    rate: number | null;
}


const commentSchema = new Schema<IComment>({

    restaurantId: { type: Schema.Types.ObjectId, ref: "Restaurants" },
    foodId: { type: Schema.Types.ObjectId, ref: "Menu" },
    userId: { type: Schema.Types.ObjectId, ref: "Users" },
    comment: String,
    rate: Number
})


const Comments = model<IComment>("Comments", commentSchema);

export default Comments;