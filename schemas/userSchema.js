const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      // required: [true, "first name is required"],
      // minLength: [8, "first name Length must be at least 8 characters"],
      // maxLength: [50, "first name Length must be 6 to 50 characters"],
    },
    email: {
      type: String,
      required: [true],
    },
    password: {
      type: String,
      required: [true],
    },
    phoneNumber: {
      type: String,
      // required: [true],
    },
    address: {
      type: String,
      // required: [true],
    },
  },
  { timestamps: true }
);

const UserModel = model("user", UserSchema);

module.exports = UserModel;
