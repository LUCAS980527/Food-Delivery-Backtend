const FoodModel = require("../../schemas/foodSchema");

const getFood = async (req, res) => {
  const { categoryId } = req.params;
  console.log(categoryId, "id");
  try {
    const data = await FoodModel.find({ categoryId });
    if (!data) {
      res.status(204).json("not founds");
    }

    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};

module.exports = getFood;
