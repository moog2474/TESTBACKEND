import  { Router } from 'express';
import  {deleteUser, updateUser, login, register, getOne, getAll} from "../controllers/user.controller"


const route = Router();

route.get("/users", getAll);
route.get("/users/:_id", getOne);
route.put("/users/:_id", updateUser);
route.delete("/users/:_id", deleteUser);

route.post("/register", register);
route.post("/login", login)

export default route