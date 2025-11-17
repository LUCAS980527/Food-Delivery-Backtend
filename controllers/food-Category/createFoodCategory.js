const FoodCategoryModel = require("../../schemas/food-categorySchema");

const createFoodCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const data = await FoodCategoryModel.create({
      categoryName: categoryName,
    });
    console.log(data);
    res.status(201).json(`created FoodCategory:${data}`);
  } catch (err) {
    console.error(err);
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};
module.exports = createFoodCategory;
