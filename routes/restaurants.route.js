const { Router } = require('express');
const restaurants = require("../controllers/restaurants.controller")
const auth = require('../middleware/auth')

const route = Router();

route.get("/restaurants", auth, restaurants.getAll);
route.get("/restaurants/:_id", auth, restaurants.getOne);
route.post("/restaurants", auth, restaurants.createRestaurant);
route.put("/restaurants/:_id", auth, restaurants.updateRestaurant);
route.delete("/restaurants/:_id", auth, restaurants.deleteRestaurant);

module.exports = route