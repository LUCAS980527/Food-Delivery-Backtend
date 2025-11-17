const UserModel = require("../../schemas/userSchema");

const deleteUser = async (req, res) => {
  const { id } = req.body;

  try {
    const data = await UserModel.findByIdAndDelete(id);

    res.status(200).json(`user deleted`);
  } catch (err) {
    console.error(err);
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};

module.exports = deleteUser;
