import  { Router } from 'express';
import  {deleteUser, updateUser, login, register, getOne, getAll} from "../controllers/user.controller"


const route = Router();

route.get("/users", getAll);
route.get("/user", getOne);
route.put("/user", updateUser);
route.delete("/user", deleteUser);

route.post("/register", register);
route.post("/login", login)

export default route