const { Router } = require('express');
const users = require("../controllers/user.controller")
const auth = require('../middleware/auth')

const route = Router();

route.get("/users", auth, users.getAll);
route.get("/users/:_id", auth, users.getOne);
route.put("/users/:_id", auth, users.updateUser);
route.delete("/users/:_id", auth, users.deleteUser);

route.post("/register", users.register);
route.post("/login", users.login)
module.exports = route