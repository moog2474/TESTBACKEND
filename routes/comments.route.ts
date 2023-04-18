import { Router } from "express";
import {
  getAll,
  getOne,
  createComment,
  updateComment,
  deleteComment,
  getLatestComments,
  getTopFood,
} from "../controllers/comments.controller";

const route = Router();

route.get("/comments", getAll);
route.get("/comment", getOne);
route.post("/comment", createComment); //auth 
route.put("/comment", updateComment); //hereggui 
route.delete("/comment", deleteComment); // hereggui 
route.get("/latestcomments", getLatestComments)
route.get("/gettopfoods", getTopFood)

export default route;
