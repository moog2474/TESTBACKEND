"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comments_controller_1 = require("../controllers/comments.controller");
const route = (0, express_1.Router)();
route.get("/comments", comments_controller_1.getAll);
route.get("/comment", comments_controller_1.getOne);
route.post("/comment", comments_controller_1.createComment); //auth 
route.put("/comment", comments_controller_1.updateComment); //hereggui 
route.delete("/comment", comments_controller_1.deleteComment); // hereggui 
route.get("/latestcomments", comments_controller_1.getLatestComments);
route.get("/gettopfoods", comments_controller_1.getTopFood);
exports.default = route;
