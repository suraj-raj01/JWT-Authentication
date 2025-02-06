const express = require("express");
const route = express.Router();
const userController = require("../controllers/userController")

route.post("/registraion",userController.registration)
route.post("/login",userController.userLogin)
route.post("/userauth",userController.userAuth)

module.exports = route;