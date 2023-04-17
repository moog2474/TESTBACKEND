"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menu_controller_1 = require("../controllers/menu.controller");
const route = (0, express_1.Router)();
route.get("/menus", menu_controller_1.getAll);
route.get("/menu", menu_controller_1.getOne);
route.post("/menu", menu_controller_1.createMenu); //auth
route.put("/menu", menu_controller_1.updateMenu); //auth 
route.delete("/menu", menu_controller_1.deleteMenu); //auth
exports.default = route;
