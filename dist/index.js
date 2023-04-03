"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = process.env.PORT;
dotenv_1.default.config();
const uri = process.env.PORT || "";
const restaurantRouter = require("./routes/restaurants.route.js");
mongoose_1.default
    .connect(uri)
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));
app.use(express_1.default.json());
app.use("/api", restaurantRouter);
app.get("/api", (req, res) => {
    res.send("<h1>Hello MongoDB from NodeJS</h1>");
});
app.listen(port, () => {
    console.log(`Express Application is running on http://localhost:${port}`);
});
