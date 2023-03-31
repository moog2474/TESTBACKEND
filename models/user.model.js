const { default: mongoose, Schema } = require("mongoose");

const userSchema = new mongoose.Schema(
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
      type: Schema.Types.Mixed,
      enum: ["Admin", "User"],
    },
    img: [],
    // lastLoginDate: Date,
  },
  {
    collection: "Users",
    timestamps: true,
  }
);

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
