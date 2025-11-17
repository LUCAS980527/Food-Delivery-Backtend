const FoodCategoryModel = require("../../schemas/food-categorySchema");

const putFoodCategory = async (req, res) => {
  const { id, categoryName } = req.body;

  try {
    const updatedFoodCategory = await FoodCategoryModel.findByIdAndUpdate(id, {
      categoryName,
    });
    if (!updatedFoodCategory) {
      return res.status(404).json("foodcategory not found");
    }

    res.status(200).json(updatedFoodCategory);
  } catch (err) {
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};

module.exports = putFoodCategory;
