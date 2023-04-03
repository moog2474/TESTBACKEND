import express, { Response, Request, Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import  restaurantRouter from "./routes/restaurants.route";

const app : Express = express();
const port = process.env.PORT;

dotenv.config();
const uri:string = process.env.PORT || ""


mongoose
  .connect(uri)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

  
app.use(express.json());
app.use("/api", restaurantRouter);

app.get("/api", (req :Request, res : Response) => {
  res.send("<h1>Hello MongoDB from NodeJS</h1>");
});

app.listen(port, () => {
  console.log(`Express Application is running on http://localhost:${port}`);
});
