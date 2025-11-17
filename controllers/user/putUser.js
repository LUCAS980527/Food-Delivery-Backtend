const UserModel = require("../../schemas/userSchema");

const putUser = async (req, res) => {
  const { id, firstname, email, password, phoneNumber, address } = req.body;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(id, {
      firstname,
      email,
      password,
      phoneNumber,
      address,
    });

    if (!updatedUser) {
      return res.status(404).json("user not found");
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};

module.exports = putUser;
