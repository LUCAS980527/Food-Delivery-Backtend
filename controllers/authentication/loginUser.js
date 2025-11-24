const UserModel = require("../../schemas/userSchema");

const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    const isPassingMatching = bcrypt.compare(password, user.password);

    if (isPassingMatching) {
      res.status(200).json(`user: ${data}`);
    } else {
      res.status(400).json("Passwod does not matching");
    }
  } catch (err) {
    res.status(500).json(`something went wrong: ${err} `);
  }
};

module.exports = loginUser;
