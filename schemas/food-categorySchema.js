const { model, Schema } = require("mongoose");

const foodCategorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: [true, "category name is required"],
    },
  },
  { timestamps: true }
);

const CategoryModel = model("category", foodCategorySchema);

module.exports = CategoryModel;
