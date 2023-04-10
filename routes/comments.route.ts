import { Router } from "express";
import {
  getAll,
  getOne,
  createComment,
  updateComment,
  deleteComment,
} from "../controllers/comments.controller";

const route = Router();

route.get("/comments", getAll);
route.get("/comment", getOne);
route.post("/comment", createComment);
route.put("/comment", updateComment);
route.delete("/comment", deleteComment);

export default route;
