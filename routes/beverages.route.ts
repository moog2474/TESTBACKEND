import { Router } from "express";

import {
    getAll,
    getOne,
    createBeverage,
    updateBeverage,
    deleteBeverage

} from "../controllers/beverages.controller";

const route = Router();

route.get("/beverages", getAll);
route.get("/beverage", getOne);
route.post("/beverages", createBeverage); //auth 
route.put("/beverage", updateBeverage); //hereggui 
route.delete("/beverage", deleteBeverage); // hereggui 


export default route;
