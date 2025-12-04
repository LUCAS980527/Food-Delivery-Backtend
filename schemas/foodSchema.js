const { model, Schema } = require("mongoose");

const FoodSchema = new Schema(
  {
    foodname: {
      type: String,
      // required: [true, " name is required"],
    },
    price: {
      type: String,
      required: [true],
    },
    image: {
      type: String,
      // required: [true],
    },
    ingredients: {
      type: String,
      // required: [true],
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
  },
  { timestamps: true }
);

const FoodModel = model("food", FoodSchema);

module.exports = FoodModel;
