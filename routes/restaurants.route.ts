import { Router } from "express";
import {
  deleteRestaurant,
  updateRestaurant,
  createRestaurant,
  getOne,
  getAll,
  search,
  getTopRestaurants
} from "../controllers/restaurants.controller";

const route = Router();

route.get("/restaurants", getAll);
route.get("/restaurant", getOne);
route.post("/restaurant", createRestaurant);
route.post("/restaurant/search", search);
route.get("/toprestaurants", getTopRestaurants)
route.put("/restaurant", updateRestaurant); //auth
route.delete("/restaurant", deleteRestaurant); // auth

//login user 

export default route;
