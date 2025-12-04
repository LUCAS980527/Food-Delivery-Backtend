const generateToken = require("../../middleware/generateToken");
const UserModel = require("../../schemas/userSchema");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json("User not found");
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) {
      return res.status(400).json("Password does not match");
    }

    const token = generateToken(user);

    return res.status(200).json({
      message: "Login successful",
      token: token,
      user: user,
    });
  } catch (err) {
    return res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = loginUser;
