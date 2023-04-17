"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurants_controller_1 = require("../controllers/restaurants.controller");
const route = (0, express_1.Router)();
route.get("/restaurants", restaurants_controller_1.getAll);
route.get("/restaurant", restaurants_controller_1.getOne);
route.post("/restaurant", restaurants_controller_1.createRestaurant);
route.post("/restaurant/search", restaurants_controller_1.search);
route.get("/toprestaurants", restaurants_controller_1.getTopRestaurants);
route.put("/restaurant", restaurants_controller_1.updateRestaurant); //auth
route.delete("/restaurant", restaurants_controller_1.deleteRestaurant); // auth
//login user 
exports.default = route;
