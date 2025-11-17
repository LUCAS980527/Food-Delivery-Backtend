const express = require("express");

const createFoodCategory = require("../controllers/food-Category/createFoodCategory");
const getFoodCategory = require("../controllers/food-Category/getFoodCategory");
const deleteFoodCategory = require("../controllers/food-CategorydeleteFoodCategory");
const putFoodCategory = require("../controllers/food-Category/putFoodCategory");

const foodCategoryRoutes = express.Router();

userRouter.get("/", getFoodCategory);

userRouter.put("/", putFoodCategory);

userRouter.delete("/", deleteFoodCategory);

userRouter.post("/", createFoodCategory);

module.exports = userRouter;
