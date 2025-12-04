const express = require("express");

const createUser = require("../controllers/user/createUser");
const isUserExist = require("../middleware/isUserExist");
const isEmailExist = require("../middleware/isEmailExist");
const loginUser = require("../controllers/authentication/loginuser");
const authenticationRouter = express.Router();

authenticationRouter.post("/login", isUserExist, loginUser);
authenticationRouter.post("/signup", isEmailExist, createUser);

module.exports = authenticationRouter;
