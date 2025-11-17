const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://amarbayn0527:araatan1007@food-delivery.0vt0x2p.mongodb.net/"
    );
    console.log("DATABASE connect ");
  } catch (err) {
    console.log("DATABASE connection failed", err);
  }
};

module.exports = connectToDB;
