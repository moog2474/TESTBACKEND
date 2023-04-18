"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const beverages_controller_1 = require("../controllers/beverages.controller");
const route = (0, express_1.Router)();
route.get("/beverages", beverages_controller_1.getAll);
route.get("/beverage", beverages_controller_1.getOne);
route.post("/beverages", beverages_controller_1.createBeverage); //auth 
route.put("/beverage", beverages_controller_1.updateBeverage); //hereggui 
route.delete("/beverage", beverages_controller_1.deleteBeverage); // hereggui 
exports.default = route;
