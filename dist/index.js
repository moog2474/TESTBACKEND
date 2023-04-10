"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const restaurants_route_1 = __importDefault(require("./routes/restaurants.route"));
const menu_route_1 = __importDefault(require("./routes/menu.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const comments_route_1 = __importDefault(require("./routes/comments.route"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const uri = process.env.MONGO_DB_URI || "";
const port = process.env.PORT;
mongoose_1.default
    .connect(uri)
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", user_route_1.default);
app.use("/api", restaurants_route_1.default);
app.use("/api", menu_route_1.default);
app.use("/api", comments_route_1.default);
app.get("/api", (req, res) => {
    res.send("<h1>Hello MongoDB from NodeJS</h1>");
});
app.listen(port, () => {
    console.log(port);
    console.log(`Express Application is running on http://localhost:${port}`);
});
