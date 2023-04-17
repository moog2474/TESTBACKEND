import { Router } from "express";
import {
  getAll,
  getOne,
  createMenu,
  updateMenu,
  deleteMenu,
} from "../controllers/menu.controller";

const route = Router();

route.get("/menus", getAll);
route.get("/menu", getOne);
route.post("/menu", createMenu); //auth
route.put("/menu", updateMenu); //auth 
route.delete("/menu", deleteMenu); //auth

export default route;
