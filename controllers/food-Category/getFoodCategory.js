const FoodCategoryModel = require("../../schemas/food-categorySchema");

const getFoodCategory = async (req, res) => {
  const { id } = req.body;

  try {
    const data = await FoodCategoryModel.findById(id);
    if (!data) {
      res.status(204).json("user not founds");
    }

    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};

module.exports = getFoodCategory;
