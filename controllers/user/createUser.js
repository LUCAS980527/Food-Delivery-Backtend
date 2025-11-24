const UserModel = require("../../schemas/userSchema");

const bcrypt = require("bcrypt");

const SALT_ROUND = 10;

const createUser = async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
  try {
    const data = await UserModel.create({
      email: email,
      password: hashedPassword,
    });
    console.log(data);
    res.status(201).json(`created user:${data}`);
  } catch (err) {
    console.error(err);
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};
module.exports = createUser;
