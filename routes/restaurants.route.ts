import { Router } from "express";
import {
  deleteRestaurant,
  updateRestaurant,
  createRestaurant,
  getOne,
  getAll,
} from "../controllers/restaurants.controller";

const route = Router();

route.get("/restaurants", getAll);
route.get("/restaurant", getOne);
route.post("/restaurant", createRestaurant);
route.put("/restaurant", updateRestaurant);
route.delete("/restaurant", deleteRestaurant);

export default route;
