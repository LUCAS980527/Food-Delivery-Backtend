const FoodCategoryModel = require("../../schemas/food-categorySchema");

const deleteFoodCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await FoodCategoryModel.findByIdAndDelete(id);

    res.status(200).json(`FoodCategory deleted`);
  } catch (err) {
    console.error(err);
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};

module.exports = deleteFoodCategory;
