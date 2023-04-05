import { Router } from "express";
import { getAll, getOne, createMenu, updateMenu, deleteMenu } from "../controllers/menu.controller";

const route = Router();

route.get("/menu", getAll)
route.get("/menu", getOne)
route.post("/menu", createMenu)
route.put("/menu", updateMenu)
route.delete("/menu", deleteMenu)

export default route