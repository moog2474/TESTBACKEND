const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const restaurantRouter = require("./routes/restaurants.route.js");
const port = process.env.PORT;
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api", restaurantRouter);

app.get("/api", (req, res) => {
  res.send("<h1>Hello MongoDB from NodeJS</h1>");
});

app.listen(port, () => {
  console.log(`Express Application is running on http://localhost:${port}`);
});
