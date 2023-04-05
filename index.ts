import express, { Response, Request, Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import restaurantRouter from "./routes/restaurants.route";
import menuRouter from "./routes/menu.route"
import userRouter from "./routes/user.route"
import commentRouter from "./routes/comments.route"

const app: Express = express();
const port = process.env.PORT;

dotenv.config();
const uri: string = process.env.PORT || ""


mongoose
  .connect(uri)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));


app.use(express.json());
app.use("/api", userRouter)
app.use("/api", restaurantRouter);
app.use("/api", menuRouter)
app.use("/api", commentRouter)

app.get("/api", (req: Request, res: Response) => {
  res.send("<h1>Hello MongoDB from NodeJS</h1>");
});

app.listen(port, () => {
  console.log(`Express Application is running on http://localhost:${port}`);
});
