import { Router } from "express";
import {
    getAll,
    getOne,
    createFood,
    updateFood,
    deleteFood,

} from "../controllers/foods.controller";

const route = Router();

route.get("/foods", getAll);
route.get("/food", getOne);
route.post("/foods", createFood); //auth 
route.put("/food", updateFood); //hereggui 
route.delete("/food", deleteFood); // hereggui 


export default route;
