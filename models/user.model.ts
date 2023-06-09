import { Schema, model, Types } from "mongoose";

interface IUser {
  name: string;
  userName: string;
  email: string;
  phone: number;
  password: string;
  point: number[];
  userType: string;
  img: string[];
}

const userSchema = new Schema<IUser>(
  {
    name: String,
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: String,
    point: [Number],
    userType: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
    img: [],
    // lastLoginDate: Date,
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const Users = model<IUser>("Users", userSchema);

export default Users;
