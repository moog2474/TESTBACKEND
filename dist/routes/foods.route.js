"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const foods_controller_1 = require("../controllers/foods.controller");
const route = (0, express_1.Router)();
route.get("/foods", foods_controller_1.getAll);
route.get("/food", foods_controller_1.getOne);
route.post("/foods", foods_controller_1.createFood); //auth 
route.put("/food", foods_controller_1.updateFood); //hereggui 
route.delete("/food", foods_controller_1.deleteFood); // hereggui 
exports.default = route;
