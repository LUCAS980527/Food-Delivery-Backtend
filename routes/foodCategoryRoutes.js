const express = require("express");

const createFoodCategory = require("../controllers/food-Category/createFoodCategory");
const getFoodCategory = require("../controllers/food-Category/getFoodCategory");
const deleteFoodCategory = require("../controllers/food-Category/deleteFoodCategory");
const putFoodCategory = require("../controllers/food-Category/putFoodCategory");
const verifyJwt = require("../middleware/generateToken");

const foodCategoryRoutes = express.Router();

foodCategoryRoutes.get("/", getFoodCategory);

foodCategoryRoutes.put("/", verifyJwt, putFoodCategory);

foodCategoryRoutes.delete("/:id", verifyJwt, deleteFoodCategory);

foodCategoryRoutes.post("/", createFoodCategory);

module.exports = foodCategoryRoutes;
