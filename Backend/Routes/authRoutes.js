const express = require("express");
const authController = require("../Controller/authController");
const routes = express.Router();

routes.post("/login", authController.login);
routes.post("/signup", authController.signup);

module.exports = routes;
