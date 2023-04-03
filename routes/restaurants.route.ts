import {Router} from "express"
import  {deleteRestaurant, updateRestaurant, createRestaurant, getOne, getAll} from "../controllers/restaurants.controller";

const route = Router();

route.get("/restaurants", getAll);
route.get("/restaurants/:_id", getOne);
route.post("/restaurants", createRestaurant);
route.put("/restaurants/:_id", updateRestaurant);
route.delete("/restaurants/:_id", deleteRestaurant);

export default route