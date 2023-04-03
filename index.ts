import express, { Response, Request, Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app : Express = express();
const port = process.env.PORT;

dotenv.config();
const uri:string = process.env.PORT || ""

const restaurantRouter = require("./routes/restaurants.route.js");

mongoose
  .connect(uri)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

  
app.use(express.json());
app.use("/api", restaurantRouter);

app.get("/api", (req, res) => {
  res.send("<h1>Hello MongoDB from NodeJS</h1>");
});

app.listen(port, () => {
  console.log(`Express Application is running on http://localhost:${port}`);
});
