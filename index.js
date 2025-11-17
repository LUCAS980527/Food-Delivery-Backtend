const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");

const userRouter = require("./routes/userRoutes");
const foodCategoryRoutes = require("./routes/foodCategoryRoutes");

const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

connectToDB();

app.get("/", (req, res) => {
  res.send("hello backend");
});

app.use("/food-Category", foodCategoryRoutes);

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
